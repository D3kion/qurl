import { Link } from "@qurl/datacloud";

import { Card, CardHeader, CardTitle } from "@/shared/ui/card";

export function ShortenerList({ data }: { data: Link[] }) {
  if (!data.length)
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            ☝️ Попробуйте сократить вашу первую ссылку!
          </CardTitle>
        </CardHeader>
      </Card>
    );
  return data.map((link) => (
    <Card
      key={link.id}
      className="px-6 py-4 flex flex-col gap-0.5 cursor-pointer"
    >
      <a
        className="font-bold"
        href={`${link.domain}/${link.key}`}
        target="_blank"
      >
        {link.domain}/{link.key}
      </a>
      <a
        className="text-muted-foreground hover:underline underline-offset-2"
        href={link.url}
        target="_blank"
      >
        {`${link.url.slice(0, 36)}${link.url.length > 36 ? "..." : ""}`}
      </a>
    </Card>
  ));
}
