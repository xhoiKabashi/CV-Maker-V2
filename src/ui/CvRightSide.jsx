import { cvData } from "../hooks/Store";
function CvRightSide() {
  // eslint-disable-next-line no-unused-vars
  const { about, work, otherWork, experience, otherExperience } = cvData(
    (state) => ({
      about: state.about,
      work: state.work,
      otherWork: state.otherWork,
      experience: state.experience,
      otherExperience: state.otherExperience,
    }),
  );
  const { aboutYou, lastName, name, professionalTitle } = about;
  const { companyName, jobDescription, jobTitle, startingDate, endingDate } =
    work;
  const {
    companyName: otherCompanyName,
    jobDescription: otherJobDescription,
    jobTitle: otherJobTitle,
    startingDate: otherStartingDate,
    endingDate: otherEndingDate,
  } = otherWork;
  const {
    endingDate: expEndingDate,
    eventName,
    experienceDescription,
    experienceTitle,
    startingDate: expStartingDate,
  } = experience;

  // const {
  //   endingDate: otherExpEndingDate,
  //   eventName: otherEventName,
  //   experienceDescription: otherExperienceDescription,
  //   experienceTitle: otherExperienceTitle,
  //   startingDate: otherExpStartingDate,
  // } = otherExperience;

  return (
    <div className=" col-span-2 grid bg-slate-100 px-5">
      <div>
        {name && (
          <h1 className="pt-7 text-5xl">
            <span className="font-bold text-slate-700">{name}</span> {lastName}
          </h1>
        )}
        {professionalTitle && (
          <h3 className="m-auto text-2xl font-semibold">{professionalTitle}</h3>
        )}
        {about && <p className="pt-5 text-sm text-slate-700">{aboutYou}</p>}
      </div>
      <div>
        {jobTitle && (
          <h1
            style={{ borderBottom: "2px solid" }}
            className="	pb-2 pt-2 text-2xl font-semibold text-slate-800"
          >
            Work Experiences
          </h1>
        )}
        {startingDate && (
          <p className="font-semibold">
            {startingDate}-{endingDate}
          </p>
        )}
        <p className="font-semibold text-slate-600">{companyName}</p>
        <p className="font-bold">{jobTitle}</p>
        <p className="pt-1 text-sm text-slate-700">{jobDescription}</p>
      </div>
      <div>
        {otherJobTitle && (
          <h1
            style={{ borderBottom: "2px solid" }}
            className="	pb-2 pt-2 text-2xl font-semibold text-slate-800"
          >
            Other Experiences
          </h1>
        )}
        {otherStartingDate && (
          <p className="font-semibold">
            {otherStartingDate}-{otherEndingDate}
          </p>
        )}
        <p className="font-semibold text-slate-600">{otherCompanyName}</p>
        <p className="font-bold">{otherJobTitle}</p>

        <p className="pt-1 text-sm text-slate-700">{otherJobDescription}</p>
      </div>
      <div>
        {experienceTitle && (
          <h1
            style={{ borderBottom: "2px solid" }}
            className="	pb-2 pt-2 text-2xl font-semibold text-slate-800"
          >
            Experience
          </h1>
        )}
        {expStartingDate && (
          <p className="font-semibold">
            {expStartingDate} - {expEndingDate}
          </p>
        )}
        <p className="font-semibold text-slate-600">{eventName}</p>
        <p className="font-bold">{experienceTitle}</p>
        <p className="pt-1 text-sm text-slate-700">{experienceDescription}</p>
      </div>
    </div>
  );
}

export default CvRightSide;
