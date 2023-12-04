/* eslint-disable react/prop-types */
function ButtonSmall({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-m flex w-10 transform items-center justify-center rounded-full bg-slate-700 px-2 py-1 font-bold text-slate-50 duration-300 hover:text-slate-300"
    >
      {children}
    </button>
  );
}

export default ButtonSmall;
