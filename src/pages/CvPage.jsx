import CvLeftSide from "../ui/CvLeftSide";
import CvRightSide from "../ui/CvRightSide";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { cvData } from "../hooks/Store";

function CvPage() {
  const componentRef = useRef();
  const setHandlePrint = cvData((state) => state.setHandlePrint);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  setHandlePrint(handlePrint);

  return (
    <div className="flex items-start justify-start gap-4">
      <div
        id="cvContainer"
        className="grid h-[1123px] w-[794px] grid-cols-3 bg-slate-100"
        ref={componentRef}
      >
        <CvLeftSide />
        <CvRightSide />
      </div>
    </div>
  );
}

export default CvPage;
