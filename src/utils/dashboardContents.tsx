import { MdDashboard } from "react-icons/md";
import { FaUsersCog, FaWallet } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { IoMdHelp, IoIosSettings } from "react-icons/io";

export const sideBarLinks = [
  {
    title: "Overview",
    content: [
      {
        Title: "Dashboard",
        Icon: <MdDashboard className="text-primary" size={12} />,
        link: "home",
      },
      {
        Title: "Profile",
        Icon: <ImProfile className="text-primary" size={12} />,
        link: "profile",
      },
    ],
  },
  {
    title: "User Management",
    content: [
      {
        Title: "All Users",
        Icon: <FaUsersCog className="text-primary" size={12} />,
        link: "users",
      },
      {
        Title: "Add Users",
        Icon: <RiUserAddFill className="text-primary" size={12} />,
        link: "add-users",
      },
    ],
  },
  {
    title: "Account",
    content: [
      {
        Title: "Wallet",
        Icon: <FaWallet className="text-primary" size={12} />,
        link: "wallet",
      },
      {
        Title: "Help",
        Icon: <IoMdHelp className="text-primary" size={12} />,
        link: "help",
      },
      {
        Title: "Settings",
        Icon: <IoIosSettings className="text-primary" size={12} />,
        link: "grade-systems",
      },
    ],
  },
];

export const usersData = [
  { name: "January", uv: 0, pv: 1800, amt: 1800 },
  { name: "February", uv: 1000, pv: 1200, amt: 2200 },
  { name: "March", uv: 1200, pv: 1100, amt: 2300 },
  { name: "April", uv: 1100, pv: 1300, amt: 2400 },
  { name: "May", uv: 1300, pv: 1500, amt: 2800 },
  { name: "June", uv: 1500, pv: 1600, amt: 3100 },
  { name: "July", uv: 1600, pv: 1700, amt: 3300 },
  { name: "August", uv: 1700, pv: 1800, amt: 3500 },
  { name: "September", uv: 1800, pv: 1700, amt: 3500 },
  { name: "October", uv: 1700, pv: 1600, amt: 3300 },
  { name: "November", uv: 1600, pv: 1400, amt: 3000 },
  { name: "December", uv: 1400, pv: 1200, amt: 2600 },
];
