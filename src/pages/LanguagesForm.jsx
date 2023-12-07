import { cvData } from "../hooks/Store";
import Button from "../ui/Button";
import { HiLanguage } from "react-icons/hi2";

function LanguagesForm() {
  const { languages, setLanguages } = cvData((state) => ({
    languages: state.languages,
    setLanguages: state.setLanguages,
  }));

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
          value={languages.language1 || ""}
          onChange={(event) =>
            setLanguages({ ...languages, language1: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter the Languages You Know"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={languages.language2 || ""}
          onChange={(event) =>
            setLanguages({ ...languages, language2: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter the Languages You Know"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={languages.language3 || ""}
          onChange={(event) =>
            setLanguages({ ...languages, language3: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter the Languages You Know"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={languages.language4 || ""}
          onChange={(event) =>
            setLanguages({ ...languages, language4: event.target.value })
          }
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
