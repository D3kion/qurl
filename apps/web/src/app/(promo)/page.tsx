import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/shared/ui/accordion";
import { Hero } from "@/widgets/promo-home";

export default function Home() {
  const signed = false;

  return (
    <main className="flex flex-col gap-24 lg:gap-40">
      <Hero user={signed ? {} : undefined} />
      <Features />
      <section className="text-center">use cases</section>
      <section className="text-center">reviews</section>
      <section className="text-center">feedback</section>
    </main>
  );
}

function Features() {
  return (
    <section className="container mx-auto max-w-[1200px]">
      {/* TODO: typography */}
      <h2 className="pb-12 text-5xl font-semibold text-center">Our features</h2>
      <Card>
        <CardContent className="pt-6 flex flex-col md:flex-row md:gap-8">
          <Accordion className="flex-[2]" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Analytics that matter</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>User your own domain</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Free QR Code Generator</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Personalize Your Short links</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Collaborate With Your Team</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="aspect-square md:aspect-video bg-green-900 md:flex-[3]"></div>
        </CardContent>
      </Card>
    </section>
  );
}
