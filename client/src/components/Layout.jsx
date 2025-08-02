import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import DevBanner from "./common/DevBanner";

const Layout = () => {
  return (
    <>
      {/* Sticky Banner and Header Container */}
      <div className="sticky top-0 z-50">
        <DevBanner />
        <Header />
      </div>

      <div className="flex flex-col min-h-screen bg-white">
        <main className="flex-grow relative">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-30 blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
