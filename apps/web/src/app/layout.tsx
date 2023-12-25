import type { Metadata } from "next";

import "@/shared/styles.css";
import { cn } from "@/shared/lib/utils";
import { fontSans } from "@/shared/lib/fonts";
import { ThemeProvider } from "@/shared/lib/theme.provider";

export const metadata: Metadata = {
  title: "qURL | Home",
  description: "",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
