import { IReason } from "types/type";

interface ReasonProps {
  reason: IReason;
  reverse?: boolean;
}

const Reason = ({ reason, reverse }: ReasonProps) => {
  const { description, iconUrl, title } = reason;
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } justify-center items-center lg:items-start gap-x-5 `}
    >
      <img
        className="w-12 h-12 bg-[#1212121A] p-3.5 rounded-full lg:mt-2"
        src={iconUrl}
        alt=""
      />
      <div>
        <div
          className={`flex flex-col justify-center items-center ${
            reverse ? "lg:items-end" : "lg:items-start"
          }  mb-5 lg:mb-0`}
        >
          <h5 className="font-bold text-[24px] lg:text-[20px] ">{title}</h5>
          <span className="block border-1 border- w-25 mt-2 mb-3"></span>
          <p
            className={`text-gray-500 text-sm px-10 text-center lg:px-0 ${
              reverse ? "lg:text-end" : "lg:text-start"
            } `}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reason;
