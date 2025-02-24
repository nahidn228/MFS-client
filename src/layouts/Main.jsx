import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className=" ">
      <Navbar />
      {/* Outlet */}
      <div className="min-h-screen flex items-center justify-center ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
