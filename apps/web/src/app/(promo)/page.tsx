import { Card, CardHeader, CardTitle } from "@/shared/ui/card";
import { Shortener } from "./shorener";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col gap-24 lg:gap-40">
      <Hero />
      <div>hello dimon</div>
    </main>
  );
}

// TODO:
function Hero() {
  return (
    <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 min-h-[400px]">
      <div className="pt-16 flex flex-col items-center text-center lg:items-start lg:text-start">
        <h1 className="inline text-orange-600 text-6xl leading-relaxed">
          qURL
        </h1>
        <p className="text-2xl max-w-2xl">
          Не только{" "}
          <h2 className="inline text-orange-600">
            современный сокращатель ссылок
          </h2>
          , но и удобный способ хранить, анализировать и делиться вашими данными
        </p>
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
    </div>
  );
}
