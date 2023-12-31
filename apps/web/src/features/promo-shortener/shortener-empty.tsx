import { Card, CardHeader, CardTitle } from "@/shared/ui/card";

export function ShortenerEmpty() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">
          ☝️ Попробуйте сократить вашу первую ссылку!
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
