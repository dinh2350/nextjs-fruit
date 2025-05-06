import DealFruit from "app/components/DealFruit";
import { IFruit } from "types/type";

interface DealFruitsProps {
  fruits: IFruit[];
}

const DealFruits = ({ fruits }: DealFruitsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 flex-wrap ">
      {fruits.length > 0
        ? fruits.map((fruit: IFruit) => (
            <DealFruit key={fruit.id} fruit={fruit} />
          ))
        : ""}
    </div>
  );
};

export default DealFruits;
