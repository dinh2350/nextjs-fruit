import FruitList from "app/components/FruitList";
import data from "data.json";

const Banner = () => {
  const { banner, categories } = data;
  return (
    <div>
      <div
        id="default-carousel"
        className="relative mt-8 w-full"
        data-carousel="slide"
      >
        <div className="relative overflow-hidden rounded-lg h-56 md:h-96 w-full ">
          <div className="absolute z-10 bg-gradient-to-b from-black/70 via-black/40 to-transparent w-full h-full rounded-2xl"></div>
          <div className="duration-700 ease-in-out ">
            <img
              src={banner.backgroundImages}
              className="absolute z-0 w-full h-full object-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>

        <div className="absolute w-full top-10 z-10 text-white ">
          <h1 className=" md:text-5xl text-xl font-bold text-center lg:w-[40%] mx-auto">
            {banner.title}
          </h1>
          <p className="mt-4 text-sm md:text-xl text-center">
            {banner.subTitle}
          </p>
          <div className="flex justify-center">
            <button className=" mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>

        <FruitList categories={categories} />
      </div>
    </div>
  );
};

export default Banner;
