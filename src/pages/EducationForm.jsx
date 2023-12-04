import Button from "../ui/Button";
import { HiOutlineAcademicCap } from "react-icons/hi2";

function EducationForm() {
  
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-center gap-4 text-xl font-semibold">
        <HiOutlineAcademicCap />
        <h1>Education</h1>
      </div>
      <div className="flex flex-grow flex-col gap-3">
        <input
          type="text"
          placeholder="Degree Title"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Universe Name"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Starting Date"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Finish Date"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
      </div>

      <div className="mb-0 mt-auto flex gap-2">
        <Button to="/contact">Contact</Button>
        <Button to="/work">Work</Button>
      </div>
    </div>
  );
}

export default EducationForm;
