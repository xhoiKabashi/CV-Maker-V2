import Button from "../ui/Button";
import { HiOutlineIdentification } from "react-icons/hi2";
import { cvData } from "../hooks/Store";

function AboutForm() {
  const { about, setAbout } = cvData((state) => ({
    about: state.about,
    setAbout: state.setAbout,
  }));

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-center gap-4 text-xl font-semibold">
        <HiOutlineIdentification />
        <h1>About</h1>
      </div>
      <div className="flex flex-grow flex-col gap-2">
        <input
          type="text"
          placeholder="Name"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={about.name || ""}
          onChange={(event) => setAbout({ ...about, name: event.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={about.lastName || ""}
          onChange={(event) =>
            setAbout({ ...about, lastName: event.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Professional Title"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={about.professionalTitle || ""}
          onChange={(event) =>
            setAbout({ ...about, professionalTitle: event.target.value })
          }
          required
        />
        <textarea
          type="text-area"
          placeholder="About you"
          className=" mb-2 h-24 max-h-28 w-full resize-y py-1 pl-9"
          value={about.aboutYou || ""}
          onChange={(event) =>
            setAbout({ ...about, aboutYou: event.target.value })
          }
          required
        />
      </div>

      <div className="mb-0 mt-auto flex gap-2">
        <Button to="/image-upload">Image Uploader</Button>
        <Button to="/contact">Contact</Button>
      </div>
    </div>
  );
}

export default AboutForm;
