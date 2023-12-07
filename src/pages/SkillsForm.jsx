import { cvData } from "../hooks/Store";
import Button from "../ui/Button";
import { HiOutlineChartBarSquare } from "react-icons/hi2";

function SkillsForm() {
  const { skills, setSkills } = cvData((state) => ({
    skills: state.skills,
    setSkills: state.setSkills,
  }));

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
          value={skills.skill1 || ""}
          onChange={(event) =>
            setSkills({ ...skills, skill1: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter Your Skills"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={skills.skill2 || ""}
          onChange={(event) =>
            setSkills({ ...skills, skill2: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter Your Skills"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={skills.skill3 || ""}
          onChange={(event) =>
            setSkills({ ...skills, skill3: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter Your Skills"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={skills.skill4 || ""}
          onChange={(event) =>
            setSkills({ ...skills, skill4: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter Your Skills"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={skills.skill5 || ""}
          onChange={(event) =>
            setSkills({ ...skills, skill5: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter Your Skills"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={skills.skill6 || ""}
          onChange={(event) =>
            setSkills({ ...skills, skill6: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter Your Skills"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={skills.skill7 || ""}
          onChange={(event) =>
            setSkills({ ...skills, skill7: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter Your Skills"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={skills.skill8 || ""}
          onChange={(event) =>
            setSkills({ ...skills, skill8: event.target.value })
          }
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
