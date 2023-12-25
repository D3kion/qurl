import Link from "next/link";

import { cn } from "@/shared/lib/utils";

export function HeaderNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Главная
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Фичи
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Документация
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Рыба
      </Link>
    </nav>
  );
}
