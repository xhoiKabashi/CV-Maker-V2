import { Outlet } from "react-router-dom";
import CvPage from "../pages/CvPage";

function CvLayout() {
  return (
    <header className="flex h-screen bg-slate-500 md:grid md:h-screen   md:grid-cols-3  md:gap-4">
      <main className=" m-auto flex h-[420px] w-96 items-center justify-center self-center	rounded-xl bg-slate-200 p-10">
        <Outlet />
      </main>
      <aside className="hidden bg-slate-500 md:col-span-2 md:m-3 md:flex md:justify-center md:overflow-auto">
        <CvPage />
      </aside>
    </header>
  );
}

export default CvLayout;
{
  /* <header className="flex h-screen items-center justify-center bg-slate-500 md:grid md:h-screen md:grid-cols-3 md:gap-4">
<main className=" m-auto flex w-96 items-center justify-center self-center rounded-xl	p-10 md:h-[420px]  md:bg-slate-200">
  <Outlet />
</main>
<aside className="col-span-2 m-3 hidden justify-center bg-slate-500 md:flex md:overflow-auto">
  <CvPage />
</aside>
</header> */
}
