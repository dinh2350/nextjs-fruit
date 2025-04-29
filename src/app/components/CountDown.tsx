import Image from "next/image";

const CountDown = () => {
  return (
    <div className="text-center mt-6 md:w-[50%]">
      <div className="flex justify-end items-center gap-x-2 ">
        <div className="flex flex-col items-center gap-y-1">
          <span className="text-3xl font-bold">29</span>
          <span className="text-gray-500 text-sm">Days</span>
        </div>
        <Image
          alt="ellipsis"
          src="/images/ellipsis.svg"
          width={20}
          height={20}
        />
        <div className="flex flex-col items-center gap-y-1">
          <time className="text-3xl font-bold">15</time>
          <span className="text-gray-500 text-sm">Hours</span>
        </div>
        <Image
          alt="ellipsis"
          src="/images/ellipsis.svg"
          width={20}
          height={20}
        />
        <div className="flex flex-col items-center gap-y-1">
          <time className="text-3xl font-bold">25</time>
          <span className="text-gray-500 text-sm">Minutes</span>
        </div>
        <Image
          alt="ellipsis"
          src="/images/ellipsis.svg"
          width={20}
          height={20}
        />
        <div className="flex flex-col items-center gap-y-1">
          <time className="text-3xl font-bold">08</time>
          <span className="text-gray-500 text-sm">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
