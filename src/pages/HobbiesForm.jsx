import Button from "../ui/Button";
import { HiOutlineBookOpen } from "react-icons/hi2";

function HobbiesForm() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-center gap-4 text-xl font-semibold">
        <HiOutlineBookOpen />
        <h1>Hobbies</h1>
      </div>
      <div className=" flex flex-grow flex-col gap-2 overflow-auto ">
        <input
          type="text"
          placeholder="Enter Your Hobbys"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter Your Hobbys"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter Your Hobbys"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter Your Hobbys"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter Your Hobbys"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter Your Hobbys"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter Your Hobbys"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter Your Hobbys"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
      </div>

      <div className=" mb-0 mt-auto flex gap-2 pt-6">
        <Button to="/skills">Skills</Button>
        <Button to="/language">Languages</Button>
      </div>
    </div>
  );
}

export default HobbiesForm;
