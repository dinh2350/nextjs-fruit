import Button from "app/components/Button";
import CountDown from "app/components/CountDown";
import DealFruits from "app/components/DealFruits";
import data from "data.json";

const DealOfTheDay = () => {
  const { dealOfTheDay } = data;

  return (
    <div className=" mt-7">
      <div className="sm:flex p-4 md:p-0 justify-between">
        <div className="sm:text-start text-center mb-9 md:w-[50%]">
          <h2 className="md:text-3xl text-xl font-black">Deal of the day</h2>
          <p className="text-sm mt-2 text-gray-600 leading-6">
            {dealOfTheDay.content}
          </p>
        </div>
        <CountDown />
      </div>
      <DealFruits fruits={dealOfTheDay.products} />
      <div className="flex justify-center mt-7">
        <Button name="Shop All" />
      </div>
    </div>
  );
};

export default DealOfTheDay;
