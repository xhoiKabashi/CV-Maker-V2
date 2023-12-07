import { cvData } from "../hooks/Store";
import Button from "../ui/Button";
import { HiOutlineBookOpen } from "react-icons/hi2";

function HobbiesForm() {
  const { hobbies, setHobbies } = cvData((state) => ({
    hobbies: state.hobbies,
    setHobbies: state.setHobbies,
  }));

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
          value={hobbies.hobbies1 || ""}
          onChange={(event) =>
            setHobbies({ ...hobbies, hobbies1: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter Your Hobbys"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={hobbies.hobbies2 || ""}
          onChange={(event) =>
            setHobbies({ ...hobbies, hobbies2: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter Your Hobbys"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={hobbies.hobbies3 || ""}
          onChange={(event) =>
            setHobbies({ ...hobbies, hobbies3: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter Your Hobbys"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={hobbies.hobbies4 || ""}
          onChange={(event) =>
            setHobbies({ ...hobbies, hobbies4: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter Your Hobbys"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={hobbies.hobbies5 || ""}
          onChange={(event) =>
            setHobbies({ ...hobbies, hobbies5: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter Your Hobbys"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={hobbies.hobbies6 || ""}
          onChange={(event) =>
            setHobbies({ ...hobbies, hobbies6: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter Your Hobbys"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={hobbies.hobbies7 || ""}
          onChange={(event) =>
            setHobbies({ ...hobbies, hobbies7: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter Your Hobbys"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={hobbies.hobbies8 || ""}
          onChange={(event) =>
            setHobbies({ ...hobbies, hobbies8: event.target.value })
          }
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
