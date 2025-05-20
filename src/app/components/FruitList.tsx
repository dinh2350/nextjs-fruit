import Fruit from "app/components/Fruit";
import { IFruitCatergory } from "types/type";

interface FruitListProps {
  categories: IFruitCatergory[];
}
const FruitList = ({ categories }: FruitListProps) => {
  const renderFruitList = (categories: IFruitCatergory[]) =>
    categories.map((item) => <Fruit key={item.id} fruitItem={item} />);

  return (
    <div className="relative hidden md:block -mt-15 z-20 max-w-5xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-between gap-4 overflow-x-auto">
        {renderFruitList(categories)}
      </div>
    </div>
  );
};

export default FruitList;
