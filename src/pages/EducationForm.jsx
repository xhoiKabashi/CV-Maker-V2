import { cvData } from "../hooks/Store";
import { useState } from "react";
import Button from "../ui/Button";
import ButtonSmall from "../ui/ButtonSmall";
import {
  HiOutlinePlus,
  HiArrowUturnLeft,
  HiOutlineAcademicCap,
} from "react-icons/hi2";

function EducationForm() {
  const { education, setEducation, otherEducation, setOtherEducation } = cvData(
    (state) => ({
      education: state.education,
      setEducation: state.setEducation,
      otherEducation: state.otherEducation,
      setOtherEducation: state.setOtherEducation,
    }),
  );

  const [other, setOther] = useState(false);

  function handleOther() {
    setOther(!other);
  }

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="mb-4 flex items-center justify-center gap-4 text-xl font-semibold">
        <HiOutlineAcademicCap />
        <h1>Education</h1>
      </div>
      {!other ? (
        <div className="flex flex-grow flex-col gap-3">
          <input
            type="text"
            placeholder="Degree Title"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={education.degreeTitle || ""}
            onChange={(event) =>
              setEducation({ ...education, degreeTitle: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="University Name"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={education.UniversityName || ""}
            onChange={(event) =>
              setEducation({ ...education, UniversityName: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="Starting Date"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={education.startingDate || ""}
            onChange={(event) =>
              setEducation({ ...education, startingDate: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="Finish Date"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={education.finishDate || ""}
            onChange={(event) =>
              setEducation({ ...education, finishDate: event.target.value })
            }
          />
        </div>
      ) : (
        <div className="flex flex-grow flex-col gap-3">
          <input
            type="text"
            placeholder="Other Degree Title"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={otherEducation.degreeTitle || ""}
            onChange={(event) =>
              setOtherEducation({
                ...otherEducation,
                degreeTitle: event.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Other Universe Name"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={otherEducation.UniversityName || ""}
            onChange={(event) =>
              setOtherEducation({
                ...otherEducation,
                UniversityName: event.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Other Starting Date"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={otherEducation.startingDate || ""}
            onChange={(event) =>
              setOtherEducation({
                ...otherEducation,
                startingDate: event.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Other Finish Date"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={otherEducation.finishDate || ""}
            onChange={(event) =>
              setOtherEducation({
                ...otherEducation,
                finishDate: event.target.value,
              })
            }
          />
        </div>
      )}
      <ButtonSmall onClick={handleOther}>
        {!other ? <HiOutlinePlus /> : <HiArrowUturnLeft />}
      </ButtonSmall>
      <div className="mb-0 mt-auto flex gap-2">
        <Button to="/contact">Contact</Button>
        <Button to="/work">Work</Button>
      </div>
    </div>
  );
}

export default EducationForm;
