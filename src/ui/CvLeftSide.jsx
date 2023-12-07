import { cvData } from "../hooks/Store";
import { v4 as uuidv4 } from "uuid";

function CvLeftSide() {
  const { contact, education, otherEducation, skills, languages, image } =
    cvData((state) => ({
      contact: state.contact,
      education: state.education,
      otherEducation: state.otherEducation,
      skills: state.skills,
      languages: state.languages,
      image: state.image,
    }));

  const { email, location, phoneNumber, webLink } = contact;
  const { UniversityName, degreeTitle, finishDate, startingDate } = education;
  const {
    UniversityName: otherUniversityName,
    degreeTitle: otherDegreeTitle,
    finishDate: otherFinishDate,
    startingDate: otherStartingDate,
  } = otherEducation;

  // all skills values are passed on the array
  const skillsArray = Object.values(skills);

  const languagesArray = Object.values(languages);
  console.log(languages);

  const imageURL = image.images;

  return (
    <div className="grid bg-slate-700 ">
      <div className="flex justify-center self-center text-[100px]">
        {image && <img src={imageURL} className="h-52 rounded-full" />}
      </div>
      <div className="flex flex-col pl-8">
        <div className="text-slate-50">
          {phoneNumber && (
            <h1 className="border-b pb-2 pt-2 text-2xl font-semibold">
              Contact
            </h1>
          )}
          {phoneNumber && (
            <ul>
              <li className="pb-2 pt-2 text-lg font-semibold">Phone:</li>
              <li className="text-sm text-slate-200">{phoneNumber}</li>
            </ul>
          )}
          {email && (
            <ul>
              <li className="pb-2 pt-2 text-lg font-semibold">Email:</li>
              <li className="text-sm text-slate-200">{email}</li>
            </ul>
          )}
          {location && (
            <ul>
              <li className="pb-2 pt-2 text-lg font-semibold">Address:</li>
              <li className="text-sm text-slate-200">{location}</li>
            </ul>
          )}
          {webLink && (
            <ul>
              <li className="pb-2 pt-2 text-lg font-semibold">GitHub</li>
              <li className="text-sm text-slate-200">{webLink}</li>
            </ul>
          )}
        </div>

        <div className="text-slate-50">
          {UniversityName && (
            <h1 className="border-b pb-2 pt-2 text-2xl font-semibold">
              Education
            </h1>
          )}
          <ul>
            {UniversityName && (
              <li className="pb-2 pt-2 text-lg font-semibold">
                {UniversityName}:
              </li>
            )}
            {degreeTitle && (
              <li className="text-sm text-slate-200">{degreeTitle}</li>
            )}
            {startingDate && (
              <li className="text-sm text-slate-200">
                {startingDate}-{finishDate}
              </li>
            )}
            {otherUniversityName && (
              <li className="pb-2 pt-2 text-lg font-semibold">
                {otherUniversityName}:
              </li>
            )}
            {otherDegreeTitle && (
              <li className="text-sm text-slate-200">{otherDegreeTitle}</li>
            )}
            {otherStartingDate && (
              <li className="text-sm text-slate-200">
                {otherStartingDate}-{otherFinishDate}
              </li>
            )}
          </ul>
        </div>
        <div className="text-slate-50">
          {skills.skill1 && (
            <h1 className="border-b pb-2  pt-2 text-2xl font-semibold">
              Skills:
            </h1>
          )}
          <ul>
            {skillsArray.map((skill) => (
              <li className="pt-2 text-sm text-slate-200" key={uuidv4()}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-slate-50">
          {languages.language1 && (
            <h1 className="border-b pb-2 pt-2 text-2xl font-semibold">
              Language:
            </h1>
          )}
          <ul>
            {languagesArray.map((lanuage) => (
              <li className="pt-2 text-sm text-slate-200" key={uuidv4()}>
                {lanuage}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CvLeftSide;
