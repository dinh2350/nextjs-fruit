import Ratting from "app/components/Ratting";
import { IFruit } from "types/type";

interface DealFruitProps {
  fruit: IFruit;
}
const DealFruit = ({ fruit }: DealFruitProps) => {
  const { name, image, rating, priceRange } = fruit;

  const renderPriceRange = (priceRange: number[]) =>
    priceRange.length > 0 ? (
      <div>
        <span className="text-2xl font-bold">{priceRange[0]}$</span>
        {priceRange[1] ? (
          <span className="text-2xl font-bold"> - {priceRange[1]}$</span>
        ) : null}
      </div>
    ) : null;

  return (
    <div className="flex flex-col items-center justify-center border-1 border-gray-200 rounded-lg basis-full md:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-60px)/4)]">
      <img
        className="object-cover mt-15 mb-10 flex-1"
        alt="ellipsis"
        src={image}
      />
      {renderPriceRange(priceRange)}
      <h5 className="border-t-1 border-gray-200 pt-5 mt-5 w-[70%] text-center text-gray-700 text-xl">
        {name}
      </h5>
      <Ratting ratting={rating} />
      <button className="cursor-pointer text-[#F85559] hover:text-red-600 font-bold mb-10 mt-10">
        Details
      </button>
    </div>
  );
};

export default DealFruit;
