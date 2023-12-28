"use client";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";

type CardProps = React.ComponentProps<typeof Card>;

export function Shortener({ className, ...props }: CardProps) {
  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader>
        <CardTitle>Попробуйте прямо сейчас</CardTitle>
        <CardDescription>
          Для доступа ко всем возможностям, необходимо авторизоваться.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <form className="flex flex-col items-center gap-2">
          <Input
            type="url"
            defaultValue="https://"
            placeholder="Ссылка для сокращения"
          />
          <Button className="w-full" type="submit">
            Сократить
          </Button>
        </form>
        {/* <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </CardContent>
    </Card>
  );
}
