import { Suspense } from "react";

import { Icons } from "@/shared/lib/icons";
import { AuthMagicConfirm } from "@/features/auth-magic-confirm";

export default function AuthConfirmPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-[350px]">
      <Suspense
        fallback={<Icons.spinner className="self-center animate-spin" />}
      >
        <AuthMagicConfirm />
      </Suspense>
    </div>
  );
}
