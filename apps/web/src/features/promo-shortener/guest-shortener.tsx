"use client";

import Link from "next/link";

import { cn } from "@/shared/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { useGuestLinks } from "@/entity/link/guest-links.hook";

import { ShortenerForm, ShortenerFormValues } from "./shortener-form";
import { ShortenerList } from "./shortener-list";

export type PromoGuestShortenerProps = { className?: string };

export function PromoGuestShortener({ className }: PromoGuestShortenerProps) {
  // TODO: add loading behaviour
  const { links, createLink } = useGuestLinks();

  async function onSubmit(payload: ShortenerFormValues) {
    try {
      await createLink(payload);
    } catch (err) {
      // TODO: notif
      console.log(err);
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      <Card>
        <CardHeader>
          <CardTitle>Попробуйте прямо сейчас</CardTitle>
          <CardDescription>
            Для доступа ко всем возможностям, необходимо{" "}
            <Link href={"/auth"} className="underline underline-offset-2">
              авторизоваться
            </Link>
            .
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <ShortenerForm onSubmit={onSubmit} disabled={links.length > 4} />
        </CardContent>
      </Card>
      <ShortenerList data={links.slice(0, 4)} />
    </div>
  );
}
