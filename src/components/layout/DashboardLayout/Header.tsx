import { getDashboardTitle } from "@/lib/functions";
import { DashboardNavbarProps } from "@/types/majorTypes";
import { Box } from "@mui/material";
import { MdMenu } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Typography } from "antd";

const Header = ({ setIsSidebar, isSidebar }: DashboardNavbarProps) => {
  const location = useLocation();
  const pathanme = location.pathname;

  const dashboardTitle = getDashboardTitle(pathanme);
  return (
    <Box className="p-3 flex justify-between sticky top-0 border-b bg-white z-10 border-gray-100">
      <Button
        className="flex space-x-2 items-center justify-center bg-white hover:bg-gray-100 shadow-primary shadow-sm cursor-pointer hover:shadow-sm  rounded-full"
        onClick={() => setIsSidebar(!isSidebar)}>
        <MdMenu size={17} className="text-secondary" />
        <span
          className="text-secondary text-[11px] font-bold mt-0.5"
          style={{ fontFamily: "eczar" }}>
          {dashboardTitle}
        </span>
      </Button>
      <Box>
        <Typography
          className="text-[15px] font-bold"
          style={{ fontFamily: "eczar" }}>
          Hi, Welcome John 👋{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
