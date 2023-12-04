import Button from "../ui/Button";
import { HiOutlineDocumentArrowUp, HiFolderPlus } from "react-icons/hi2";

function ImageUploader() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-center gap-4 text-xl font-semibold">
        <HiOutlineDocumentArrowUp />
        <h1>Image</h1>
      </div>
      <div className="flex flex-grow flex-col items-center justify-center">
        <label
          htmlFor="imageInput"
          className="m-auto cursor-pointer text-[90px] text-slate-700"
        >
          <HiFolderPlus />
          <input
            id="imageInput"
            type="file"
            multiple
            accept="image/*"
            className="hidden"
          />
        </label>
      </div>

      <div className="mb-0 mt-auto flex  gap-2">
        <Button to="/language">Languages</Button>
        <Button to="/contact">Print</Button>
      </div>
    </div>
  );
}

export default ImageUploader;
