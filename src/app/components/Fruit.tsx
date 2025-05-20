import { IFruitCatergory } from "types/type";

interface IFruitItem {
  fruitItem: IFruitCatergory;
}
const Fruit = ({ fruitItem }: IFruitItem) => {
  const { name, imageUrl } = fruitItem;
  return (
    <div className="flex flex-col items-center ">
      <img src={imageUrl} className="w-[60%]" alt="Grapes" />
      <span className="mt-2 text-sm text-gray-800">{name}</span>
    </div>
  );
};

export default Fruit;
