import Link from "next/link";

import { Button } from "@/shared/ui/button";
import { ThemeToggle } from "@/features/theme-toggle";
import { UserNavigation } from "@/features/user-navigation";

import { HeaderNav } from "./header-nav";

export function PromoLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <div className="container flex h-14 items-center">
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
        <HeaderNav className="mx-6 hidden lg:flex" />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          {true ? (
            <Button asChild>
              <Link href="/auth">Ранний доступ</Link>
            </Button>
          ) : (
            <UserNavigation />
          )}
        </div>
      </div>
      <div className="flex-1 space-y-4 lg:py-24">{children}</div>
    </div>
  );
}
