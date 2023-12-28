import dynamic from "next/dynamic";

import { Card, CardHeader, CardTitle } from "@/shared/ui/card";
import { Shortener } from "@/features/promo-shortener";

const HeroBG = dynamic(() => import("./hero-bg"), { ssr: false });

export function Hero() {
  return (
    <div className="relative -mt-14 pt-32">
      <HeroBG />
      <section className="container mx-auto flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:grid-rows-1 min-h-[400px]">
        <div className="lg:pt-16 flex flex-col items-center text-center lg:items-start lg:text-start">
          <h1 className="inline text-accent-foreground text-6xl leading-relaxed font-bold">
            qURL
          </h1>
          <span className="text-sm lg:text-2xl max-w-sm lg:max-w-2xl text-accent-foreground/70">
            Не только{" "}
            <h2 className="inline bg-primary text-accent-foreground font-medium">
              современный сокращатель ссылок
            </h2>
            , но и{" "}
            <h3 className="inline bg-primary text-accent-foreground font-medium">
              удобный способ хранить, анализировать и делиться
            </h3>{" "}
            вашими данными
          </span>
        </div>
        <div className="mx-auto space-y-2">
          <Shortener />
          {true && (
            <Card className="px-6 py-4 flex flex-col gap-0.5 cursor-pointer">
              <a
                className="font-bold"
                href="https://qurl.su/yaru"
                target="_blank"
              >
                qurl.su/yaru
              </a>
              <a
                className="text-muted-foreground hover:underline underline-offset-2"
                href="https://yandex.ru"
                target="_blank"
              >
                https://yandex.ru
              </a>
            </Card>
          )}
          {true && (
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  Попробуйте сократить вашу первую ссылку!
                </CardTitle>
              </CardHeader>
            </Card>
          )}
        </div>
      </section>
      <section className="mt-12 col-span-2 h-[180px] bg-background/25 border-y backdrop-blur">
        <ul className="h-full container mx-auto flex justify-evenly items-center">
          <div className="bg-muted/80 h-3/5 w-px" />
          <li>
            <h3>Active users</h3>
            <span>100+</span>
          </li>
          <div className="bg-muted h-3/5 w-px" />
          <li>
            <h3>Shortened links</h3>
            <span>100k+</span>
          </li>
          <div className="bg-muted h-3/5 w-px" />
          <li>
            <h3>Montly traffic</h3>
            <span>10m+</span>
          </li>
          <div className="bg-muted/80 h-3/5 w-px" />
        </ul>
      </section>
    </div>
  );
}
