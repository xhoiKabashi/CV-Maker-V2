import { cvData } from "../hooks/Store";
import { useState } from "react";
import Button from "../ui/Button";
import ButtonSmall from "../ui/ButtonSmall";

import {
  HiOutlineArrowTrendingUp,
  HiArrowUturnLeft,
  HiOutlinePlus,
} from "react-icons/hi2";

function OtherExperiencesForm() {
  const { experience, setExperience, otherExperience, setOtherExperience } =
    cvData((state) => ({
      experience: state.experience,
      setExperience: state.setExperience,
      otherExperience: state.otherExperience,
      setOtherExperience: state.setOtherExperience,
    }));

  console.log(otherExperience);
  const [other, setOther] = useState(false);
  function handleOther() {
    setOther(!other);
  }

  return (
    <div className="flex h-full flex-col gap-1">
      <div className="mb-4 flex items-center justify-center gap-4 text-xl font-semibold">
        <HiOutlineArrowTrendingUp />
        <h1>Experiences and Trainings</h1>
      </div>

      {!other ? (
        <div className="flex flex-grow flex-col">
          <input
            type="text"
            placeholder="Experience/ Training Title"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={experience.experienceTitle || ""}
            onChange={(event) =>
              setExperience({
                ...experience,
                experienceTitle: event.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Company/ Event Name"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={experience.eventName || ""}
            onChange={(event) =>
              setExperience({
                ...experience,
                eventName: event.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Starting Date"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={experience.startingDate || ""}
            onChange={(event) =>
              setExperience({
                ...experience,
                startingDate: event.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Ending Date"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={experience.endingDate || ""}
            onChange={(event) =>
              setExperience({
                ...experience,
                endingDate: event.target.value,
              })
            }
          />
          <textarea
            type="text-area"
            placeholder="Experience Description"
            className=" mb-2 h-14 max-h-20 w-full resize-y py-1 pl-9"
            value={experience.experienceDescription || ""}
            onChange={(event) =>
              setExperience({
                ...experience,
                experienceDescription: event.target.value,
              })
            }
          />
        </div>
      ) : (
        <div className="flex flex-grow flex-col">
          <input
            type="text"
            placeholder="Other Experience/ Training Title"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={otherExperience.experienceTitle || ""}
            onChange={(event) =>
              setOtherExperience({
                ...otherExperience,
                experienceTitle: event.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Other Company/ Event Name"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={otherExperience.eventName || ""}
            onChange={(event) =>
              setOtherExperience({
                ...otherExperience,
                eventName: event.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Other Starting Date"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={otherExperience.startingDate || ""}
            onChange={(event) =>
              setOtherExperience({
                ...otherExperience,
                startingDate: event.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Other Ending Date"
            className="mb-2 w-full rounded-full py-1 pl-9"
            value={otherExperience.endingDate || ""}
            onChange={(event) =>
              setOtherExperience({
                ...otherExperience,
                endingDate: event.target.value,
              })
            }
          />
          <textarea
            type="text-area"
            placeholder="Other Job Description"
            className=" mb-2 h-14 max-h-20 w-full resize-y py-1 pl-9"
            value={otherExperience.experienceDescription || ""}
            onChange={(event) =>
              setOtherExperience({
                ...otherExperience,
                experienceDescription: event.target.value,
              })
            }
          />
        </div>
      )}
      <ButtonSmall onClick={handleOther}>
        {!other ? <HiOutlinePlus /> : <HiArrowUturnLeft />}
      </ButtonSmall>
      <div className="mb-0 mt-auto flex gap-2">
        <Button to="/work"> Work</Button>
        <Button to="/skills">Skills</Button>
      </div>
    </div>
  );
}

export default OtherExperiencesForm;
