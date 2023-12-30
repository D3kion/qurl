import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function HelpPage() {
  return (
    <div className="container flex flex-col gap-12 py-8 px-20">
      <div className="flex justify-between items-center">
        <h2 className="pb-2 text-3xl font-semibold tracking-tight">
          Центр помощи
        </h2>
        <div className="relative w-[420px]">
          <Input className="pl-8" placeholder="Чем вам помочь?" />
          <MagnifyingGlassIcon className="absolute left-3 inset-y-0 h-full pointer-events-none" />
          <div className="absolute right-3 inset-y-0 h-full text-muted-foreground flex items-center pointer-events-none">
            cmd+k
          </div>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Популярные вопросы и статьи</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-6">
          <Link href="#">Статья #1</Link>
          <Link href="#">Статья #2</Link>
          <Link href="#">Статья #3</Link>
        </CardContent>
      </Card>
      <div className="grid grid-cols-3 gap-6">
        <CategoryCard title="С чего начать" />
        <CategoryCard title="Общие вопросы" />
        <CategoryCard title="Управление ссылками" />
        <CategoryCard title="Управление проектом" />
        <CategoryCard title="Пользовательские домены" />
        <CategoryCard title="API" />
      </div>
    </div>
  );
}

function CategoryCard({ title }: { title: string }) {
  return (
    <Link href="#">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
