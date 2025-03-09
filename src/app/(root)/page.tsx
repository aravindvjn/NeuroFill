import Card from "@/components/cards/card";
import { cardsItems } from "@/components/cards/contants";


export default async function Page() {

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 layout gap-[10px] sm:gap-[20px] md:gap-[30px]">
      {cardsItems?.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}
