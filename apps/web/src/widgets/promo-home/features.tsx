import {
  BarChartIcon,
  LinkBreak2Icon,
  MixerHorizontalIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import { Card, CardContent } from "@/shared/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/shared/ui/accordion";
import Image from "next/image";

export function Features() {
  return (
    <section
      id="features"
      className="container mx-auto max-w-[1200px] scroll-m-24 lg:scroll-m-32"
    >
      <div className="pb-12 flex flex-col gap-4 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold ">
          Функционал, о котором вы мечтали
        </h2>
        <p className="md:text-xl text-muted-foreground">
          qURL поможет вам легко и быстро следить за вашими переходами
        </p>
      </div>
      <Card>
        <CardContent className="md:pt-6 flex flex-col md:flex-row gap-4 md:gap-8">
          <Accordion
            className="flex-[2]"
            type="single"
            defaultValue="analytics"
          >
            <AccordionItem value="analytics">
              <AccordionTrigger className="text-start md:text-md">
                <div className="flex gap-3 items-center">
                  <BarChartIcon className="h-4 w-4" />
                  Наглядная аналитика
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Сервис предоставляет мощную аналитику для ваших ссылок, включая
                геолокацию, устройство, браузер и информацию о реферерах.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="customization">
              <AccordionTrigger className="text-start md:text-md">
                <div className="flex gap-3 items-center">
                  <MixerHorizontalIcon className="h-4 w-4" />
                  Персонализация коротких ссылок
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Настройте поведение вашей ссылки с помощью таргетинга устройств,
                географического таргетинга, скрытия ссылки и других функций.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="qr-code">
              <AccordionTrigger className="text-start md:text-md">
                <div className="flex gap-3 items-center">
                  <LinkBreak2Icon className="h-4 w-4" />
                  Бесплатный QR-код генератор
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Сервис предлагает бесплатные QR-коды для каждой короткой ссылки,
                которую вы создаете.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="custom-domain">
              <AccordionTrigger className="text-start md:text-md">
                <div className="flex gap-3 items-center">
                  <RocketIcon className="h-4 w-4" />
                  Подключение своего домена
                </div>
              </AccordionTrigger>
              <AccordionContent className="leading-tight">
                Сервис предлагает бесплатное и неограниченное использование
                собственного домена для всех тарифных планов, чтобы вы могли
                создавать брендированные ссылки, которые привлекают внимание.
              </AccordionContent>
            </AccordionItem>
            {/* <AccordionItem value="item-5">
                <AccordionTrigger className="text-start md:text-md">елитесь результатами</AccordionTrigger>
                <AccordionContent>
                  Пригласите своих коллег для совместной работы над вашими ссылками.
                </AccordionContent>
              </AccordionItem> */}
          </Accordion>
          <div className="aspect-square md:aspect-video md:flex-[3] flex items-center justify-center shadow shadow-primary bg-white rounded-2xl">
            <Image src="/analytics.svg" alt="" width={800} height={600} />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
