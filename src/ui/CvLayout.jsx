import { Outlet } from "react-router-dom";
import CvPage from "../pages/CvPage";

function CvLayout() {
  return (
    <header className="grid h-screen grid-cols-2   gap-4  bg-slate-700">
      <main className="m-auto flex h-[420px] w-96 items-center justify-center self-center	rounded-xl bg-slate-200 p-10">
        <Outlet />
      </main>
      <aside className="m-3 flex  justify-center bg-slate-100">
        <CvPage />
      </aside>
    </header>
  );
}

export default CvLayout;
