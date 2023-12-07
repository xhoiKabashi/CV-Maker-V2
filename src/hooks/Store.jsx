import { create } from "zustand";

export const cvData = create((set) => ({
  about: {},
  setAbout: (aboutData) => set({ about: aboutData }),
  contact: {},
  setContact: (contactData) => set({ contact: contactData }),
  education: {},
  setEducation: (educationData) => set({ education: educationData }),
  otherEducation: {},
  setOtherEducation: (otherEducationData) =>
    set({ otherEducation: otherEducationData }),
  work: {},
  setWork: (workData) => set({ work: workData }),
  otherWork: {},
  setOtherWork: (otherWorkData) => set({ otherWork: otherWorkData }),
  experience: {},
  setExperience: (experienceData) => set({ experience: experienceData }),
  otherExperience: {},
  setOtherExperience: (otherExperienceData) =>
    set({ otherExperience: otherExperienceData }),
  skills: {},
  setSkills: (skillsData) => set({ skills: skillsData }),
  hobbies: {},
  setHobbies: (hobbiesData) => set({ hobbies: hobbiesData }),
  languages: {},
  setLanguages: (languageData) => set({ languages: languageData }),
  image: {},
  setImage: (imageData) => set({ image: imageData }),
  handlePrint: null,
  setHandlePrint: (handlePrint) => set({ handlePrint }),
}));
