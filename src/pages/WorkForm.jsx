import { cvData } from "../hooks/Store";
import { useState } from "react";
import Button from "../ui/Button";
import ButtonSmall from "../ui/ButtonSmall";
import {
  HiOutlineBriefcase,
  HiOutlinePlus,
  HiArrowUturnLeft,
} from "react-icons/hi2";

function WorkForm() {
  const { work, setWork, otherWork, setOtherWork } = cvData((state) => ({
    work: state.work,
    setWork: state.setWork,
    otherWork: state.otherWork,
    setOtherWork: state.setOtherWork,
  }));

  console.log(otherWork);
  const [other, setOther] = useState(false);

  function handleOther() {
    setOther(!other);
  }

  return (
    <div className="flex h-full flex-col gap-1">
      <div className="mb-4 flex items-center justify-center gap-4 text-xl font-semibold">
        <HiOutlineBriefcase />
        <h1>Work</h1>
      </div>
      {!other ? (
        <div className="flex flex-grow flex-col ">
          <input
            type="text"
            placeholder="Job Title"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={work.jobTitle || ""}
            onChange={(event) =>
              setWork({ ...work, jobTitle: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="Company Name"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={work.companyName || ""}
            onChange={(event) =>
              setWork({ ...work, companyName: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="Starting Date"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={work.startingDate || ""}
            onChange={(event) =>
              setWork({ ...work, startingDate: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="Ending Date"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={work.endingDate || ""}
            onChange={(event) =>
              setWork({ ...work, endingDate: event.target.value })
            }
          />
          <textarea
            type="text-area"
            placeholder="Job Description"
            className=" mb-2 h-14 max-h-20 w-full resize-y py-1 pl-9"
            value={work.jobDescription || ""}
            onChange={(event) =>
              setWork({ ...work, jobDescription: event.target.value })
            }
          />
          {/* dasdasds */}
        </div>
      ) : (
        <div className="flex flex-grow flex-col ">
          <input
            type="text"
            placeholder="Other Job Title"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={otherWork.jobTitle || ""}
            onChange={(event) =>
              setOtherWork({ ...otherWork, jobTitle: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="Other Company Name"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={otherWork.companyName || ""}
            onChange={(event) =>
              setOtherWork({ ...otherWork, companyName: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="Other Starting Date"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={otherWork.startingDate || ""}
            onChange={(event) =>
              setOtherWork({ ...otherWork, startingDate: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="Other Ending Date"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={otherWork.endingDate || ""}
            onChange={(event) =>
              setOtherWork({ ...otherWork, endingDate: event.target.value })
            }
          />
          <textarea
            type="text-area"
            placeholder="Other Job Description"
            className=" mb-2  h-14 max-h-20 w-full resize-y py-1 pl-9"
            value={otherWork.jobDescription || ""}
            onChange={(event) =>
              setOtherWork({ ...otherWork, jobDescription: event.target.value })
            }
          />
        </div>
      )}
      <ButtonSmall onClick={handleOther}>
        {!other ? <HiOutlinePlus /> : <HiArrowUturnLeft />}
      </ButtonSmall>
      <div className="mb-0 mt-auto flex gap-2">
        <Button to="/education">Education</Button>
        <Button to="/other"> Experiences</Button>
      </div>
    </div>
  );
}

export default WorkForm;
