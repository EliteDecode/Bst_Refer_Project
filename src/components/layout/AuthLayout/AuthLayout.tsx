import { Box } from "@mui/material";

import { Link, Outlet } from "react-router-dom";
import logo from "@/assets/images/Logo.png";
import Footer from "../GeneralLayout/Footer";

const AuthLayout = () => {
  return (
    <>
      <Box className="bg-[#e7e7e7] h-screen flex justify-center items-center ">
        <Box className="sm:px-8 px-2 absolute top-5 sm:left-10 left-0 sm:py-2 py-8">
          <Link to="/">
            <img src={logo} alt="Logo of BST" className="sm:w-[12%] w-[55%]" />
          </Link>
        </Box>
        <Box className="w-full ">
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default AuthLayout;
