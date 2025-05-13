import Reason from "app/components/Reason";
import { IReason } from "types/type";

interface ReasonListProps {
  reasonList: IReason[];
}

const ReasonList = ({ reasonList }: ReasonListProps) => {
  if (reasonList.length <= 0) return null;

  const renderReasonList = (reasonList: IReason[], reverse?: boolean) => {
    return reasonList.map((reason: IReason, index: number) => {
      if (reverse)
        return index % 2 !== 0 ? (
          <Reason reason={reason} reverse key={reason.id} />
        ) : null;

      return index % 2 === 0 ? (
        <Reason reason={reason} key={reason.id} />
      ) : null;
    });
  };
  return (
    <>
      <div className=" flex flex-col mt-10 lg:mt-0 order-1 justify-between">
        {renderReasonList(reasonList)}
      </div>
      <div className="order-3 flex flex-col justify-between ">
        {renderReasonList(reasonList, true)}
      </div>
    </>
  );
};

export default ReasonList;
