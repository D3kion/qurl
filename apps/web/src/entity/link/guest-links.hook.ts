import { useState } from "react";
import useSWRMutation from "swr/mutation";
import { Link } from "@qurl/datacloud";

import http from "@/shared/lib/http";
import { AxiosResponse } from "axios";
import useSWR from "swr";

const GUEST_LINKS_TOKEN = "glinks";

export function useGuestLinks() {
  const [linksIds, setLinksIds] = useState(
    localStorage.getItem(GUEST_LINKS_TOKEN)?.split(",") ?? []
  );

  const {
    data,
    error: loadingError,
    isLoading,
  } = useSWR(`/links?ids=${linksIds}`, (url) =>
    http.get<any, AxiosResponse<Link[]>>(url)
  );

  const {
    trigger: createLink,
    isMutating: isCreating,
    error: createError,
  } = useSWRMutation(
    "/links",
    (url, { arg }: { arg: { url: string } }) =>
      http.post<any, AxiosResponse<Link>>(url, arg),
    {
      onSuccess(res) {
        const link = res.data;
        const newLinks = [...linksIds, link.id];
        setLinksIds(newLinks);
        localStorage.setItem(GUEST_LINKS_TOKEN, newLinks.join(","));
      },
    }
  );

  return {
    links: data?.data ?? [],
    isLoading,
    isCreating,
    loadingError,
    createError,
    createLink,
  };
}
