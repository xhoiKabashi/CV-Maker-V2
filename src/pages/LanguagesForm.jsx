import Button from "../ui/Button";
import { HiLanguage } from "react-icons/hi2";

function LanguagesForm() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-center gap-4 text-xl font-semibold">
        <HiLanguage />
        <h1>Languages</h1>
      </div>
      <div className=" flex flex-grow flex-col gap-4 ">
        <input
          type="text"
          placeholder="Enter the Languages You Know"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter the Languages You Know"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter the Languages You Know"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
        <input
          type="text"
          placeholder="Enter the Languages You Know"
          className="mb-2 w-full rounded-full py-1 pl-9"
        />
      </div>

      <div className=" mb-0 mt-auto flex gap-2 ">
        <Button to="/hobbies">Hobbies</Button>
        <Button to="/image-upload">Image Uploader</Button>
      </div>
    </div>
  );
}

export default LanguagesForm;
