import { Outlet } from "react-router-dom";
import Sidebar from "../components/Admin/Sideabar";


const MainAdmin = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-violet-100 min-h-screen font-sans">
      <header className="bg-white px-6 py-4 shadow sticky top-0 z-30 flex justify-between items-center border-b border-violet-200 from-blue-600 to-purple-600">
        <h1 className="text-2xl font-bold ">
          Admin<span className="">Panel</span>
        </h1>
      </header>

      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainAdmin;
