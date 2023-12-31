import { useState } from "react";
import useSWRMutation from "swr/mutation";

import http from "@/shared/lib/http";

export function useGuestLinks() {
  const [links, setLinks] = useState([]);
  const { trigger: createLink, isMutating: isCreating } = useSWRMutation(
    "/link/short",
    (url, { arg }: { arg: { url: string } }) => http.post(url, arg) // TODO: DTOs for better typing
  );

  return {
    links,
    isCreating,
    createLink,
  };
}
