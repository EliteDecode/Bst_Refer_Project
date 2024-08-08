import { Box, IconButton } from "@mui/material";
import { Typography } from "antd";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { sideBarLinks } from "@/utils/dashboardContents";
import logo from "@/assets/images/Logo.png";
import { DashboardNavbarProps } from "@/types/majorTypes";

const Sidebar = ({ setIsSidebar, isSidebar }: DashboardNavbarProps) => {
  const location = useLocation();

  const handleSidebarToggle = () => {
    if (window.innerWidth < 767) {
      setIsSidebar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleSidebarToggle);
    return () => {
      window.removeEventListener("resize", handleSidebarToggle);
    };
  }, []);

  return (
    <Box
      className="h-screen   border border-gray-100 bg-[#fff] "
      style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      {" "}
      <Box>
        <Box className="p-2">
          <Box className="flex w-full items-center justify-between">
            <img src={logo} alt="logo" className="w-[40%] " />
            <Box className="text-center md:hidden block">
              <IconButton
                onClick={() => setIsSidebar(!isSidebar)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer">
                <Close style={{ fontSize: "35px" }} />
              </IconButton>
            </Box>
          </Box>

          <Box className="mt-5 space-x-2 flex items-center px-4 py-2 bg-[#919EAB29]">
            <Box>
              <Typography className="font-bold text-gray-600">
                Musa Ahmed
              </Typography>
              <Typography className="text-[10px] text-gray-500 -mt-1">
                User Admin
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="mt-1">
          {sideBarLinks.map((item, index) => {
            return (
              <Box className="px-2 py-1 mt-2" key={index}>
                <Box>
                  <Typography className="text-black font-black mb-1  text-[12px] uppercase">
                    {item.title}
                  </Typography>
                </Box>

                {item.content.map((item2, index2) => (
                  <Link
                    key={index2}
                    onClick={handleSidebarToggle}
                    to={item2.link}
                    className={`flex items-center space-x-2 p-2 mt-1 rounded-lg ${
                      location.pathname.includes(item2.link)
                        ? " bg-gray-100"
                        : "bg-[#fff] hover:bg-gray-100 border-[#fafafa]"
                    }     cursor-pointer`}>
                    {item2.Icon}
                    <Typography className=" sm:text-[10px] text-[13px] ">
                      {item2.Title}
                    </Typography>
                  </Link>
                ))}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
