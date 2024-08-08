import { Box } from "@mui/material";

import { Link, Outlet } from "react-router-dom";
import logo from "@/assets/images/Logo.png";

const AuthLayout = () => {
  return (
    <Box className="bg-[#fafafa] h-screen">
      <Box className="px-8 sm:py-2 py-8">
        <Link to="/">
          <img src={logo} alt="Logo of BST" className="sm:w-[7%] w-[25%]" />
        </Link>
      </Box>
      <Outlet />
    </Box>
  );
};

export default AuthLayout;
