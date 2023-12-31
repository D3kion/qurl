import { Card } from "@/shared/ui/card";

export function ShortenerList() {
  return (
    <Card className="px-6 py-4 flex flex-col gap-0.5 cursor-pointer">
      <a className="font-bold" href="https://qurl.su/yaru" target="_blank">
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
  );
}
