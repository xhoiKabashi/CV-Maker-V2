import { HiOutlinePhone } from "react-icons/hi2";
import { cvData } from "../hooks/Store";

import Button from "../ui/Button";

function ContactForm() {
  const { contact, setContact } = cvData((state) => ({
    contact: state.contact,
    setContact: state.setContact,
  }));

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-center gap-4 text-xl font-semibold">
        <HiOutlinePhone />
        <h1>Contact</h1>
      </div>
      <div className="flex flex-grow flex-col gap-5">
        <input
          type="text"
          placeholder="Link of the Github Profile"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={contact.webLink || ""}
          onChange={(event) =>
            setContact({ ...contact, webLink: event.target.value })
          }
        />
        <input
          type="email"
          placeholder="Your email address"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={contact.email || ""}
          onChange={(event) =>
            setContact({ ...contact, email: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Your Location"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={contact.location || ""}
          onChange={(event) =>
            setContact({ ...contact, location: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Your Phone Number"
          className="mb-2 w-full rounded-full py-1 pl-9"
          value={contact.phoneNumber || ""}
          onChange={(event) =>
            setContact({ ...contact, phoneNumber: event.target.value })
          }
        />
      </div>

      <div className="mb-0 mt-auto flex gap-2">
        <Button to="/">About</Button>
        <Button to="/education">Education</Button>
      </div>
    </div>
  );
}

export default ContactForm;
