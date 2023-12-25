import Link from "next/link";

import { Button } from "@/shared/ui/button";
import { ThemeToggle } from "@/features/theme-toggle";
import { UserNavigation } from "@/features/user-navigation";

import { HeaderNav } from "./header-nav";

export function PromoLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <div className="border-b">
        <div className="container flex h-14 items-center px-8">
          <div>logo | qURL</div>
          <HeaderNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            {true ? (
              <Button asChild>
                <Link href="/auth">Early access</Link>
              </Button>
            ) : (
              <UserNavigation />
            )}
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
    </div>
  );
}
