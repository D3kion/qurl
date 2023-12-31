import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

export type ShortenerFormValues = {
  url: string;
};

export type ShortenerFormProps = {
  onSubmit: (values: ShortenerFormValues) => void;
};

export function ShortenerForm({ onSubmit }: ShortenerFormProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form) as ShortenerFormValues;
    onSubmit(data);
  }

  return (
    <form
      className="flex flex-col sm:flex-row items-center gap-2"
      onSubmit={handleSubmit}
    >
      <Input
        name="url"
        type="url"
        defaultValue="https://"
        placeholder="Ссылка для сокращения"
      />
      <Button className="w-full sm:w-fit" type="submit">
        Сократить
      </Button>
    </form>
  );
}
