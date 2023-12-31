import { Hero } from "@/widgets/promo-home";

export default function Home() {
  const signed = false;

  return (
    <main className="flex flex-col gap-24 lg:gap-40">
      <Hero user={signed ? {} : undefined} />
      <section className="text-center">features</section>
      <section className="text-center">use cases</section>
      <section className="text-center">reviews</section>
      <section className="text-center">feedback</section>
    </main>
  );
}
