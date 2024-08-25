import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Logo from "../../../assets/images/Logo.png";
import { Box, Grid } from "@mui/material";

import { NavbarLinks } from "@/utils/contents";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "@/components/ui/button";

import Mobile from "./Mobile";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { LogoutUser } from "@/services/features/auth/authSlice";
import useDashboardHeader from "@/hooks/useDashboardHeader";
import ButtonSpinners from "@/helpers/ButtonSpinners";

const Navbar = () => {
  const { token } = useSelector((state: any) => state.auth);
  const { handleLogout, isLoading } = useDashboardHeader();

  return (
    <>
      {/* Main Bar */}
      <Box
        className={`items-center fixed top-0 left-0 right-0 w-full  bg-white  z-10 transition-all duration-300 `}>
        <Box className="sm:block hidden container p-5">
          <Grid container>
            <Grid item xs={2} md={2}>
              <Box>
                <AnchorLink href="#home">
                  <img
                    src={Logo}
                    alt="Purplebee Logo"
                    className="w-[50%]"
                    id="#home"
                  />
                </AnchorLink>
              </Box>
            </Grid>
            <Grid item xs={8} md={8}>
              <Box className="flex justify-center items-center">
                <NavigationMenu className="justify-center z-10 bg-white">
                  <NavigationMenuList>
                    {NavbarLinks?.map((item, index) => (
                      <NavigationMenuItem key={index}>
                        <AnchorLink offset="100" href={`#${item?.title}`}>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}>
                            {item?.title}
                          </NavigationMenuLink>
                        </AnchorLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </Box>
            </Grid>
            <Grid item xs={2} md={2}>
              <Box className="flex items-center space-x-1">
                {token ? (
                  <>
                    <Link to="/dashboard/home">
                      <Button
                        size="sm"
                        disabled={isLoading}
                        className="bg-primary flex items-center space-x-1">
                        <span>Dashboard</span>
                      </Button>
                    </Link>

                    <Button
                      onClick={handleLogout}
                      size="sm"
                      disabled={isLoading}
                      className="bg-destructive text-white flex items-center space-x-1">
                      <span>{isLoading ? <ButtonSpinners /> : "Logout"}</span>
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/auth/register">
                      <Button
                        size="sm"
                        className="bg-primary flex items-center space-x-1">
                        <span>Apply Now</span>
                      </Button>
                    </Link>
                    <Link to="/auth/login">
                      <Button
                        size="sm"
                        className="bg-secondary text-white flex items-center space-x-1">
                        <span>Login</span>
                      </Button>
                    </Link>
                  </>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Mobile Menu Bar */}
        <Mobile />
      </Box>
    </>
  );
};

export default Navbar;
