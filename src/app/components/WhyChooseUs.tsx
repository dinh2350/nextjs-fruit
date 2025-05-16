import ReasonList from "app/components/ReasonList";
import data from "data.json";

const WhyChooseUs = () => {
  const { reasonWhyChooseUs } = data;
  return (
    <div className="flex flex-col justify-center items-center mb-30">
      <h3 className="font-black text-xl sm:text-3xl">Why Choose Us</h3>
      <p className="text-center text-sm lg:text-[16px] text-gray-500 px-4 mt-3 mb-4 lg:w-[60%]">
        Contrary to popular belief, is not simply random text. It has roots in a
        piece of classical Latin literature from 45 BC, making it over 2000
        years old.
      </p>
      <div className="lg:flex gap-x-10">
        <img
          className="w-full order-2 lg:w-[60%] object-cover"
          src="/images/why-choose-us.png"
          alt=""
        />
        <ReasonList reasonList={reasonWhyChooseUs} />
      </div>
    </div>
  );
};

export default WhyChooseUs;
