import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CvLayout from "./ui/CvLayout";
import AboutForm from "./pages/AboutForm";
import ContactForm from "./pages/ContactForm";
import EducationForm from "./pages/EducationForm";
import WorkForm from "./pages/WorkForm";
import OtherExperiencesForm from "./pages/OtherExperiencesForm";
import SkillsForm from "./pages/SkillsForm";
import HobbiesForm from "./pages/HobbiesForm";
import LanguagesForm from "./pages/LanguagesForm";
import ImageUploader from "./pages/ImageUploader";

const router = createBrowserRouter([
  {
    element: <CvLayout />,
    children: [
      {
        path: "/",
        element: <AboutForm />,
      },
      {
        path: "contact",
        element: <ContactForm />,
      },
      {
        path: "education",
        element: <EducationForm />,
      },
      {
        path: "work",
        element: <WorkForm />,
      },
      {
        path: "other",
        element: <OtherExperiencesForm />,
      },
      {
        path: "skills",
        element: <SkillsForm />,
      },
      {
        path: "hobbies",
        element: <HobbiesForm />,
      },
      {
        path: "language",
        element: <LanguagesForm />,
      },

      {
        path: "image-upload",
        element: <ImageUploader />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
