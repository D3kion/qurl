import Link from "next/link";
import { AuthForm } from "@/features/auth-form";

export default function RegisterPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Вход</h1>
        <p className="text-sm text-muted-foreground">
          Введите ваш email, чтобы продолжить
        </p>
      </div>
      <AuthForm />
      <p className="px-3 text-center text-sm text-muted-foreground">
        Продолжая регистрацию, вы принимаете наши{" "}
        <Link
          href="#"
          className="underline underline-offset-4 hover:text-primary"
        >
          Правила пользования
        </Link>{" "}
        и{" "}
        <Link
          href="#"
          className="underline underline-offset-4 hover:text-primary"
        >
          Политику конфиденциальности
        </Link>
        .
      </p>
    </div>
  );
}
