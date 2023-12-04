import Button from "../ui/Button";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

function OtherExperiencesForm() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-center gap-4 text-xl font-semibold">
        <HiOutlineArrowTrendingUp />
        <h1>Experiences and Trainings</h1>
      </div>
      <div className="flex flex-grow flex-col gap-1">
        <input
          type="text"
          placeholder="Experience/ Training Title"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Company/ Event Name"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Starting Date"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Ending Date"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <textarea
          type="text-area"
          placeholder="Job Description"
          className=" mb-2 h-24 max-h-28 w-full resize-y py-1 pl-9"
        />
      </div>

      <div className="mb-0 mt-auto flex gap-2">
        <Button to="/work"> Work</Button>
        <Button to="/skills">Skills</Button>
      </div>
    </div>
  );
}

export default OtherExperiencesForm;
