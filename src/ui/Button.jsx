/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Button({ children, to }) {
  return (
    <Link
      to={to}
      className="text-m flex w-40 transform items-center justify-center rounded-full bg-slate-700 px-2 py-1 font-bold text-slate-50 duration-300 hover:text-slate-300"
    >
      {children}
    </Link>
  );
}

export default Button;
