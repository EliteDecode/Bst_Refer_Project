import { UserProps } from "@/types/majorTypes";
import { Download } from "lucide-react";
import { FaUsersCog, FaWallet } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosSettings, IoMdHelp } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { RiUserAddFill } from "react-icons/ri";

const path = window.location.pathname;

export const sideBarLinks = [
  {
    title: "Overview",
    content: [
      {
        Title: "Dashboard",
        Icon: (
          <MdDashboard
            className={`${path.includes("home") ? "text-primary" : "text-gray-500"}`}
            size={12}
          />
        ),
        link: "home",
      },
      {
        Title: "Profile",
        Icon: (
          <ImProfile
            className={`${path.includes("profile") ? "text-primary" : "text-gray-500"}`}
            size={12}
          />
        ),
        link: "profile",
      },
    ],
  },
  {
    title: "Referral Management",
    content: [
      {
        Title: "All Referrals",
        Icon: (
          <FaUsersCog
            className={`${path.includes("referrals") ? "text-primary" : "text-gray-500"}`}
            size={16}
          />
        ),
        link: "referrals",
      },
      {
        Title: "Add New Referral",
        Icon: (
          <RiUserAddFill
            className={`${path.includes("add-referral") ? "text-primary" : "text-gray-500"}`}
            size={16}
          />
        ),
        link: "add-referral",
      },
    ],
  },
  {
    title: "Account",
    content: [
      {
        Title: "Wallet",
        Icon: (
          <FaWallet
            className={`${path.includes("wallet") ? "text-primary" : "text-gray-500"}`}
            size={12}
          />
        ),
        link: "wallet",
      },
      {
        Title: "Withdrawal",
        Icon: (
          <Download
            className={`${path.includes("withdrawal") ? "text-primary" : "text-gray-500"}`}
            size={15}
          />
        ),
        link: "withdrawal",
      },
      {
        Title: "Help",
        Icon: (
          <IoMdHelp
            className={`${path.includes("help") ? "text-primary" : "text-gray-500"}`}
            size={17}
          />
        ),
        link: "help",
      },
      {
        Title: "Account Settings",
        Icon: (
          <IoIosSettings
            className={`${path.includes("settings") ? "text-primary" : "text-gray-500"}`}
            size={16}
          />
        ),
        link: "settings",
      },
    ],
  },
];

export const usersDataChart = [
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

//UsersProps

export const usersData: UserProps[] = [
  {
    fullname: "Chinonso Okeke",
    email: "chinonso.okeke@example.com",
    phone: "+2347012345678",
    address: "12, Admiralty Way, Lekki, Lagos",
    status: "successful",
    course: "Software Engineering",
  },
  {
    fullname: "Ayomide Adebayo",
    email: "ayomide.adebayo@example.com",
    phone: "+2348098765432",
    address: "45, Alagbole Street, Ikeja, Lagos",
    status: "pending",
    course: "Cybersecurity",
  },
  {
    fullname: "Ngozi Nwankwo",
    email: "ngozi.nwankwo@example.com",
    phone: "+2348034567890",
    address: "33, Aba Road, Port Harcourt, Rivers",
    status: "successful",
    course: "Data Science",
  },
  {
    fullname: "Ibrahim Musa",
    email: "ibrahim.musa@example.com",
    phone: "+2349023456789",
    address: "22, Zaria Road, Kano, Kano",
    status: "pending",
    course: "Cloud Computing",
  },
  {
    fullname: "Funke Adewale",
    email: "funke.adewale@example.com",
    phone: "+2348134567891",
    address: "9, Ring Road, Ibadan, Oyo",
    status: "successful",
    course: "Artificial Intelligence",
  },
  {
    fullname: "Emeka Eze",
    email: "emeka.eze@example.com",
    phone: "+2348123456782",
    address: "7, New Haven, Enugu, Enugu",
    status: "pending",
    course: "Web Development",
  },
  {
    fullname: "Yetunde Bakare",
    email: "yetunde.bakare@example.com",
    phone: "+2348145678912",
    address: "15, Bodija Estate, Ibadan, Oyo",
    status: "successful",
    course: "DevOps Engineering",
  },
  {
    fullname: "Sola Adeyemi",
    email: "sola.adeyemi@example.com",
    phone: "+2347067891234",
    address: "21, Opebi Road, Ikeja, Lagos",
    status: "pending",
    course: "Blockchain Technology",
  },
  {
    fullname: "Bolanle Olayemi",
    email: "bolanle.olayemi@example.com",
    phone: "+2348076543210",
    address: "18, Oba Akran Avenue, Ikeja, Lagos",
    status: "successful",
    course: "Mobile App Development",
  },
  {
    fullname: "Adamu Bello",
    email: "adamu.bello@example.com",
    phone: "+2349056781234",
    address: "30, Ahmadu Bello Way, Kaduna, Kaduna",
    status: "pending",
    course: "Game Development",
  },
];

// Add user inputs
export const addUsersInputs = [
  {
    label: "Full Name",
    type: "text",
    name: "fullname",
    placeholder: "Enter full name",
  },
  {
    label: "Email Address",
    type: "email",
    name: "email",
    placeholder: "Enter email address",
  },
  {
    label: "Phone Number",
    type: "tel",
    name: "phone",
    placeholder: "Enter phone number",
  },
  {
    label: "Address",
    type: "text",
    name: "address",
    placeholder: "Enter address",
  },
  {
    label: "Course",
    type: "text",
    name: "course",
    placeholder: "Enter course",
  },
];

//Update Profile
export const updateProfileInputs = [
  {
    label: "Full Name",
    type: "text",
    name: "fullname",
    placeholder: "Enter full name",
  },

  {
    label: "Phone Number",
    type: "tel",
    name: "phone",
    placeholder: "Enter phone number",
  },
  {
    label: "Address",
    type: "text",
    name: "address",
    placeholder: "Enter address",
  },
  {
    label: "Bst Unique ID",
    type: "text",
    name: "bstId",
    placeholder: "Enter Unique BST ID",
  },
  {
    label: "Username",
    type: "text",
    name: "username",
    placeholder: "Enter username",
  },
];
