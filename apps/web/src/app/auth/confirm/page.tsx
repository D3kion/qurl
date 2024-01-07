import { AuthMagicConfirm } from "@/features/auth-magic-confirm";

export default function AuthConfirmPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Подтвердите вход
        </h2>
        <p className="text-sm text-muted-foreground">
          Зайдите в указанную почту и подтвердите вход, чтобы продолжить
        </p>
      </div>
      <AuthMagicConfirm />
    </div>
  );
}
