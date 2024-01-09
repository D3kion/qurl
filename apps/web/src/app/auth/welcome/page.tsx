import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Textarea } from "@/shared/ui/textarea";

export default function WelcomePage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Ранний доступ</h2>
        <p className="text-sm text-muted-foreground">
          Оставьте заявку для участия в раннем доступе
        </p>
      </div>
      <form className="flex flex-col gap-3">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Как вас зовут?</Label>
          <Input id="name" placeholder="Имя" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="type">Чем вы занимаетесь?</Label>
          <Select>
            <SelectTrigger
              id="type"
              // className="text-muted-foreground"
            >
              <SelectValue placeholder="Род деятельности" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Блогер">Блогер</SelectItem>
              <SelectItem value="Писатель">Писатель</SelectItem>
              <SelectItem value="Стример">Стример</SelectItem>
              <SelectItem value="Digital-бизнес">Digital-бизнес</SelectItem>
              <SelectItem value="Рекламные услуги">Рекламные услуги</SelectItem>
              <SelectItem value="Некоммерческая организация">
                Некоммерческая организация
              </SelectItem>
              <SelectItem value="Другое">Другое</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="members">Сколько человек у вас в команде?</Label>
          <Select>
            <SelectTrigger
              id="members"
              // className="text-muted-foreground"
            >
              <SelectValue placeholder="Размер команды" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="<3">до 3</SelectItem>
              <SelectItem value="4-10">4-10</SelectItem>
              <SelectItem value="11-25">11-25</SelectItem>
              <SelectItem value="26-50">26-50</SelectItem>
              <SelectItem value=">50">больше 50</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="traffic">Какой планируемый объем трафика?</Label>
          <Select>
            <SelectTrigger
              id="traffic"
              // className="text-muted-foreground"
            >
              <SelectValue placeholder="Объем трафика" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="<1">до 1 000 переходов</SelectItem>
              <SelectItem value="1-10">1 000 - 10 000</SelectItem>
              <SelectItem value="10-100">10 000 - 100 000</SelectItem>
              <SelectItem value="100-1000">100 000 - 1 000 000</SelectItem>
              <SelectItem value=">1000">больше 1 000 000 переходов</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="using">Какие альтренативы вы уже используете?</Label>
          <Select>
            <SelectTrigger
              id="using"
              // className="text-muted-foreground"
            >
              <SelectValue placeholder="Альтернативы" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nothing">Ничего</SelectItem>
              <SelectItem value="vkcc">Vk.cc</SelectItem>
              <SelectItem value="clckru">Clck.ru</SelectItem>
              <SelectItem value="bitly">Bit.ly</SelectItem>
              <SelectItem value="dubco">Dub.co</SelectItem>
              <SelectItem value="goo.su">Goo.su</SelectItem>
              <SelectItem value="custom">Своя разработка</SelectItem>
              <SelectItem value="other">Другое</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="comment">Остались вопросы?</Label>
          <Textarea
            id="comment"
            placeholder="Предложения / Пожелания / Вопросы"
            rows={3}
          />
        </div>
        <Button className="mt-2" type="submit">
          Оставить заявку
        </Button>
      </form>
    </div>
  );
}
