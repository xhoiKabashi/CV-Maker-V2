import Button from "../ui/Button";
import { HiOutlineChartBarSquare } from "react-icons/hi2";

function SkillsForm() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-center gap-4 text-xl font-semibold">
        <HiOutlineChartBarSquare />
        <h1>Skills</h1>
      </div>
      <div className=" flex flex-grow flex-col gap-2 overflow-auto ">
        <input
          type="text"
          placeholder="Enter Your Skills"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter Your Skills"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter Your Skills"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter Your Skills"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter Your Skills"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter Your Skills"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter Your Skills"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter Your Skills"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
      </div>

      <div className=" mb-0 mt-auto flex gap-2 pt-6">
        <Button to="/other">Other Experiences</Button>
        <Button to="/hobbies">Hobbies</Button>
      </div>
    </div>
  );
}

export default SkillsForm;
