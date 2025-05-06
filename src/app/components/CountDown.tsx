import Image from "next/image";

interface CountDownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDown = ({ days, hours, minutes, seconds }: CountDownProps) => {
  const renderCountDownTime = (
    label: string,
    value: number,
    isShowEllipsis: boolean
  ) =>
    value >= 0 ? (
      <>
        <div className="flex flex-col items-center gap-y-1">
          <span className="text-3xl font-bold">{value}</span>
          <span className="text-gray-500 text-sm">{label}</span>
        </div>
        {showEllipsis(isShowEllipsis)}
      </>
    ) : null;

  const showEllipsis = (showEllipsis: boolean) =>
    showEllipsis && (
      <Image alt="ellipsis" src="/images/ellipsis.svg" width={20} height={20} />
    );

  return (
    <div className="text-center mt-6 md:w-[50%]">
      <div className="flex justify-end items-center gap-x-2 ">
        {renderCountDownTime("Days", days, true)}
        {renderCountDownTime("Hours", hours, true)}
        {renderCountDownTime("Minutes", minutes, true)}
        {renderCountDownTime("Seconds", seconds, false)}
      </div>
    </div>
  );
};

export default CountDown;
