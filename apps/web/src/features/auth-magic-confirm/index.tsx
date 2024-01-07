"use client";

import { useSearchParams } from "next/navigation";

import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";

export function AuthMagicConfirm() {
  const params = useSearchParams();
  const code = params.get("code");
  const mailSrv = params.get("mail");

  return (
    <>
      {code && <Card className="text-center py-2">{code}</Card>}
      {mailSrv && (
        <Button asChild>
          <a href={`https://${mailSrv}`} target="_blank">
            Перейти к почтовому сервису
          </a>
        </Button>
      )}
    </>
  );
}
