import { Button } from "@/components/ui/button";
import useMobileNavbar from "@/hooks/useMobileNavbar";
import { NavbarLinks } from "@/utils/contents";
import { Box } from "@mui/material";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import Logo from "../../../assets/images/Logo.png";

import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Mobile = () => {
  const { toggleSidebar, sidebarOpen } = useMobileNavbar();
  return (
    <Box className="md:hidden relative">
      <Box className="p-5 flex justify-between items-center">
        <Box>
          <AnchorLink href="#home">
            <img src={Logo} alt="BST Logo" className="w-[35%]" />
          </AnchorLink>
        </Box>
        <Box onClick={toggleSidebar}>
          <IoIosMenu size={40} />
        </Box>
      </Box>
      <Box
        className={`w-full absolute top-0 bg-white h-screen overflow-scroll transition-transform duration-500 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <Box className="p-2">
          <Box className="flex justify-between items-center">
            <Box>
              <img src={Logo} alt="Purplebee Logo" className="w-[35%]" />
            </Box>
            <Box onClick={toggleSidebar}>
              <IoMdClose size={40} />
            </Box>
          </Box>
          <Sidebar
            className="w-full mt-5 border-none bg-white"
            style={{ width: "100%" }}
            collapsedWidth="100%"
            backgroundColor="white">
            {NavbarLinks?.map((item, index) => (
              <Menu key={index} onClick={toggleSidebar}>
                <AnchorLink offset="100" href={`#${item?.title}`}>
                  <MenuItem> {item?.title} </MenuItem>
                </AnchorLink>
              </Menu>
            ))}
          </Sidebar>

          <Box className="absolute z-10 bg-white bottom-0 right-0 left-0 w-full p-4 border-t border-gray-300">
            <Box className="flex items-center justify-center w-full space-x-2">
              <Link to="/auth/register">
                <Button
                  size="lg"
                  className="bg-primary flex items-center space-x-1">
                  <span>Apply Now</span>
                </Button>
              </Link>
              <Link to="/auth/login">
                <Button
                  size="lg"
                  className="bg-secondary text-white flex items-center space-x-1">
                  <span>Login</span>
                </Button>
              </Link>
            </Box>
            <Box className="text-center mt-2">
              © 2024 BST. All rights reserved.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mobile;
