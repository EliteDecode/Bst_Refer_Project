import { Box } from "@mui/material";
import { Typography } from "antd";
import { FaRegCopy } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import ChangePasswordForm from "@/components/dashboard_components/forms/ChangePasswordForm";
import { MdDeleteOutline } from "react-icons/md";
const Settings = () => {
  return (
    <Box>
      <Box className="grid gap-4 sm:grid-cols-3 grid-cols-1">
        <Box className="border bg-white shadow-md rounded-md p-3">
          <Typography style={{ fontFamily: "eczar" }}>Referal Code</Typography>
          <Box className="shadow-inner p-3 flex justify-between rounded-md border shadow-primary">
            <Typography className="font-bold">BST-K5Tu7D</Typography>
            <Box className="flex items-center border space-x-2 cursor-pointer rounded-md bg-green-100 text-green-600 px-2 py-0.5">
              <FaRegCopy size={15} />
              <span className="text-[12px]">Copy code</span>
            </Box>
          </Box>
        </Box>

        <Box className="border bg-white shadow-md rounded-md p-3">
          <Typography style={{ fontFamily: "eczar" }}>Your Email</Typography>
          <Box className="shadow-inner p-3 flex justify-between rounded-md border shadow-primary">
            <Typography className="font-bold">manathan@gmail.com</Typography>
            <Box className="flex items-center border space-x-2 cursor-pointer rounded-md bg-purple-100 text-purple-600 px-2 py-0.5">
              <CiEdit size={15} />
              <span className="text-[12px]">Change Email</span>
            </Box>
          </Box>
        </Box>

        <Box className="border bg-white shadow-md rounded-md p-3">
          <Typography style={{ fontFamily: "eczar" }}>Your Account</Typography>
          <Box className="shadow-inner p-3 flex justify-between rounded-md border shadow-primary">
            <Typography className="font-bold">Sammy Ajayi</Typography>
            <Box className="flex items-center border space-x-2 cursor-pointer rounded-md bg-red-100 text-red-600 px-2 py-0.5">
              <MdDeleteOutline size={15} />
              <span className="text-[12px]">Delete Account</span>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="w-[35%] border shadow-md mt-5 p-5 rounded-md">
        <Typography className="font-bold" style={{ fontFamily: "eczar" }}>
          Change Password
        </Typography>
        <ChangePasswordForm />
      </Box>
    </Box>
  );
};

export default Settings;
