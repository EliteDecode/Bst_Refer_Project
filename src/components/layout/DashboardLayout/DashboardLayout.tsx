import useHandleResizeSidebar from "@/hooks/useHandleResizeSidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import Header from "./Header";

const DashboardLayout = () => {
  const { isSidebar, setIsSidebar } = useHandleResizeSidebar();

  return (
    <div>
      <Box
        className={`flex flex-wrap h-screen  ${
          isSidebar ? "overflow-y-hidden" : "overflow-y-scroll"
        }`}>
        <Box
          className={`sidebar transit  bg-white z-30 ${
            isSidebar ? "showSidebar  " : "sm:w-[0%]"
          }`}
          sx={{
            left: {
              xs: isSidebar ? "0" : "-100%",
              sm: isSidebar ? "0" : "-100%", // Keep sidebar hidden for small screens
            },
          }}>
          <Sidebar setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
        </Box>
        <Box
          className={`${
            isSidebar ? "header" : "sm:w-[100%]"
          } header transit  bg-white w-[100%]`}>
          <Header setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
          <Box className=" sm:p-5 p-2 h-screen w-full overflow-y-scroll bg-[#fafafa] ">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default DashboardLayout;
