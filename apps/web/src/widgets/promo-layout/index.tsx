import Link from "next/link";

import { cn } from "@/shared/lib/utils";
import { buttonVariants } from "@/shared/ui/button";
import { ThemeToggle } from "@/features/theme-toggle";
import { PromoNavigation } from "@/features/promo-navigation";

export function PromoLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <div className="container flex h-14 items-center z-10">
        <Link href="/" className="flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          qURL
        </Link>
        <nav className="hidden flex-1 lg:flex items-center justify-between mx-6">
          <div>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link" }),
                "no-underline hover:text-primary hover:no-underline",
                "text-foreground"
              )}
            >
              Главная
            </Link>
            <Link
              href="/#features"
              className={cn(
                buttonVariants({ variant: "link" }),
                "no-underline text-muted-foreground hover:text-primary hover:no-underline"
              )}
            >
              Возможности
            </Link>
            {/* <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link" }),
                "no-underline text-muted-foreground hover:text-primary hover:no-underline"
              )}
            >
              Тарифы
            </Link>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link" }),
                "no-underline text-muted-foreground hover:text-primary hover:no-underline"
              )}
            >
              Обратная связь
            </Link> */}
          </div>
          {/* <div>
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ variant: "link" }),
                "no-underline text-muted-foreground hover:text-primary hover:no-underline"
              )}
            >
              Блог
            </Link>
            <Link
              href="/help"
              className={cn(
                buttonVariants({ variant: "link" }),
                "no-underline text-muted-foreground hover:text-primary hover:no-underline"
              )}
              // className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Помощь
            </Link>
          </div> */}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <PromoNavigation />
        </div>
      </div>
      <div className="flex-1 space-y-4 pb-24">{children}</div>
      <div className="pt-12 pb-8 bg-border/10 border-t border-border">
        <div className="container flex flex-col gap-4 items-center">
          <div className="flex-col text-center">
            {/* <div>
              <Link
                className={buttonVariants({
                  className: "!text-foreground",
                  variant: "link",
                })}
                href="/"
              >
                Главная
              </Link>
            </div> */}
            <Link
              className={buttonVariants({
                className: "!text-foreground",
                variant: "link",
              })}
              href="#"
            >
              Правила пользования
            </Link>
            <Link
              className={buttonVariants({
                className: "!text-foreground",
                variant: "link",
              })}
              href="#"
            >
              Политика конфиденциальности
            </Link>
          </div>
          <p>© 2024 qURL.su</p>
        </div>
      </div>
    </div>
  );
}
