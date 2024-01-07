import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

export type ShortenerFormValues = {
  url: string;
};

export type ShortenerFormProps = {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: ShortenerFormValues) => void;
  disabled?: boolean;
};

export function ShortenerForm({ onSubmit, disabled }: ShortenerFormProps) {
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
        disabled={disabled}
      />
      <Button className="w-full sm:w-fit" type="submit" disabled={disabled}>
        Сократить
      </Button>
    </form>
  );
}
