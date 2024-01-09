import { AxiosError, AxiosResponse } from "axios";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import http from "@/shared/lib/http";
import { UserModel } from "./user.model";
import { useEffect, useState } from "react";

const ACCESS_TOKEN = "acs";
const REFRESH_TOKEN = "rfsh";

export function useAuth() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem(ACCESS_TOKEN);
    savedToken && setAccessToken(savedToken);
  }, []);

  useEffect(() => {
    let token = accessToken || localStorage.getItem(ACCESS_TOKEN);
    console.log("token", token);
    token && localStorage.setItem(ACCESS_TOKEN, token);
    // localStorage.setItem(REFRESH_TOKEN, refreshToken)

    const reqId = http.interceptors.request.use((req) => {
      if (token) {
        req.headers.Authorization = `Bearer ${token}`;
      }
      return req;
    });
    let resId: number | undefined;
    if (token) {
      resId = http.interceptors.response.use(null, (e) => {
        const err = e as AxiosError;
        if (err?.response?.status === 401) logout();
      });
    }

    return () => {
      http.interceptors.request.eject(reqId);
      resId && http.interceptors.response.eject(resId);
    };
  }, [accessToken]);

  const {
    data: user,
    error: loadingError,
    isLoading,
    mutate: mutateUser,
  } = useSWR(
    accessToken ? `/auth/me` : null,
    (url) => http.get<any, AxiosResponse<UserModel>>(url),
    {
      revalidateOnFocus: false,
    }
  );

  const {
    trigger: login,
    isMutating: isLoggingIn,
    error: loginError,
  } = useSWRMutation(
    "/auth/magic",
    (url, { arg }: { arg: { destination: string } }) =>
      http.post<any, AxiosResponse<{ code: number }>>(url, arg)
  );

  const {
    trigger: confirm,
    isMutating: isConfirming,
    error: confirmError,
  } = useSWRMutation(
    "/auth/magic",
    (url, { arg: { token } }: { arg: { token: string } }) => {
      if (!token) return null;
      return http.get<
        any,
        AxiosResponse<{ access_token: string; refresh_token: string }>
      >(`${url}?token=${token}`);
    },
    {
      onSuccess: (res) => {
        if (!res?.data) return;
        const { access_token, refresh_token } = res.data;
        setAccessToken(access_token);
      },
    }
  );

  function logout() {
    setAccessToken(null);
    localStorage.removeItem(ACCESS_TOKEN);
    mutateUser();
  }

  return {
    user: user?.data,
    isLoading,
    loadingError,

    login,
    isLoggingIn,
    loginError,

    confirm,
    isConfirming,
    confirmError,

    logout,
  };
}
