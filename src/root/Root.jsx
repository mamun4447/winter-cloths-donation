import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {
  return (
    <div className="md:max-w-[1280px] mx-auto">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
