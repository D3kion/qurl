import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import http from "@/shared/lib/http";
import { LinkModel } from "./link.model";

const GUEST_LINKS_TOKEN = "glinks";

// TODO: add initials for SSR?
export function useGuestLinks() {
  const [linksIds, setLinksIds] = useState<string[]>([]);

  const {
    data,
    error: loadingError,
    isLoading,
  } = useSWR(`/links?ids=${linksIds}`, (url) =>
    http.get<any, AxiosResponse<LinkModel[]>>(url)
  );

  const {
    trigger: createLink,
    isMutating: isCreating,
    error: createError,
  } = useSWRMutation(
    "/links",
    (url, { arg }: { arg: { url: string } }) =>
      http.post<any, AxiosResponse<LinkModel>>(url, arg),
    {
      onSuccess: ({ data: link }) =>
        setLinksIds((state) => [...state, link.id]),
    }
  );

  useEffect(() => {
    const saved = localStorage
      .getItem(GUEST_LINKS_TOKEN)
      ?.split(",")
      .filter(Boolean);
    if (saved?.length) setLinksIds(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(GUEST_LINKS_TOKEN, linksIds.join(","));
  }, [linksIds]);

  return {
    links: data?.data ?? [],
    isLoading,
    isCreating,
    loadingError,
    createError,
    createLink,
  };
}
