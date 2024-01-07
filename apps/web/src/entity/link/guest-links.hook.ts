import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { Link } from "@qurl/datacloud";

import http from "@/shared/lib/http";

const GUEST_LINKS_TOKEN = "glinks";

// TODO: add initials for SSR?
export function useGuestLinks() {
  const [linksIds, setLinksIds] = useState<string[]>([]);

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
      onSuccess: ({ data: link }) =>
        setLinksIds((state) => [...state, link.id]),
    }
  );

  useEffect(() => {
    const saved = localStorage.getItem(GUEST_LINKS_TOKEN)?.split(",");
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
