"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/shared/lib/utils";
import { Icons } from "@/shared/lib/icons";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useAuth } from "@/entity/user/auth.hook";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AuthForm({ className, ...props }: AuthFormProps) {
  const router = useRouter();
  const { login, isLoggingIn, loginError } = useAuth();

  async function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email") as
      | string
      | null;
    if (!email) {
      // TODO
      return;
    }

    const res = await login({ destination: email as string });

    const redirParams = new URLSearchParams({
      mail: email.split("@")[1],
      code: res.data.code.toString(),
    });
    router.push("/auth/confirm?" + redirParams.toString());
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoggingIn}
            />
          </div>
          <Button type="submit" disabled={isLoggingIn}>
            {isLoggingIn && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Войти с помощью Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Или продолжить с помощью
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Button variant="outline" type="button" disabled>
          {isLoggingIn ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "}
          Яндекс (Soon)
        </Button>
        <Button variant="outline" type="button" disabled>
          {isLoggingIn ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "}
          ВКонтакте (Soon)
        </Button>
      </div>
    </div>
  );
}
