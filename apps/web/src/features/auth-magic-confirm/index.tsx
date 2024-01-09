"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Icons } from "@/shared/lib/icons";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { useAuth } from "@/entity/user/auth.hook";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export function AuthMagicConfirm() {
  const router = useRouter();
  const params = useSearchParams();
  const { confirm } = useAuth();

  const token = params.get("token");
  const code = params.get("code");
  const mailSrv = params.get("mail");

  useEffect(() => {
    async function confirmToken() {
      if (!token) return;
      try {
        const res = await confirm({ token });
        if (!res) throw new Error("Empty response");
      } catch (err) {
        // TODO
        return;
      }
      router.push("/auth/welcome");
    }

    confirmToken();
  }, []);

  if (!token) {
    return (
      <>
        <div className="flex flex-col space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Подтвердите вход
          </h2>
          <p className="text-sm text-muted-foreground">
            Зайдите в указанную почту и подтвердите вход, чтобы продолжить
          </p>
        </div>
        {code && <Card className="text-center py-2">{code}</Card>}
        {mailSrv && (
          <Button asChild>
            <a className="flex gap-1" href={`https://${mailSrv}`}>
              Перейти к почтовому сервису <ExternalLinkIcon />
            </a>
          </Button>
        )}
      </>
    );
  }

  return (
    <div className="flex flex-col space-y-2 text-center">
      <h2 className="text-2xl font-semibold tracking-tight">Входим</h2>
      <p className="pb-4 text-sm text-muted-foreground">
        Пожалуйста, подождите
      </p>
      <Icons.spinner className="self-center animate-spin" />
    </div>
  );
}
