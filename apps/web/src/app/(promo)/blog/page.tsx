import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

export default function BlogPage() {
  return (
    <div className="container flex flex-col gap-12 py-8 px-20">
      <div>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight">Блог</h2>
        <p className="text-sm text-muted-foreground">
          Последение новости и обновления от{" "}
          <span className="text-primary-foreground">qURL</span>
        </p>
      </div>
      <div className="grid grid-cols-3 justify-around gap-6">
        <div className="absolute -mt-7 inset-x-0 h-px bg-foreground/25" />
        <BlogCard title="Новость #1" />
        <BlogCard title="Новость #2" />
        <BlogCard title="Новость #3" />
        <BlogCard title="Новость #4" />
        <BlogCard title="Новость #5" />
      </div>
    </div>
  );
}

function BlogCard({ title }: { title: string }) {
  return (
    <Link href="#">
      <Card className="overflow-hidden max-w-[]">
        <figure className="bg-primary aspect-video" />
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          Short preview lorem ipsuma dollar sit amet dollat hui
        </CardContent>
        <CardFooter>meta info</CardFooter>
      </Card>
    </Link>
  );
}
