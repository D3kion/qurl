import { AxiosResponse } from "axios";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import http from "@/shared/lib/http";
import { UserModel } from "./user.model";

export function useAuth() {
  const {
    data,
    error: loadingError,
    isLoading,
  } = useSWR(`/auth/me`, (url) => http.get<any, AxiosResponse<UserModel>>(url));

  const {
    trigger: login,
    isMutating: isLoggingIn,
    error: loginError,
  } = useSWRMutation(
    "/auth/magic",
    (url, { arg }: { arg: { destination: string } }) =>
      // TODO: chech typings
      http.post<any, AxiosResponse<{ code: number }>>(url, arg),
    {
      onSuccess: console.log,
    }
  );

  return {
    user: data,
    isLoading,
    loadingError,

    login,
    isLoggingIn,
    loginError,
  };
}
