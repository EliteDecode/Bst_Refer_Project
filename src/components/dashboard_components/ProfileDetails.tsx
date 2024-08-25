import { Box } from "@mui/material";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { MdOutlineVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const ProfileDetails = () => {
  const { user } = useSelector((state: any) => state.user);

  return (
    <Box>
      <Box>
        <Typography className="text-center text-[20px] font-semibold mt-4">
          {user?.fullname}
        </Typography>
        <Typography className="text-center text-[13px]  text-gray-500">
          @{user?.email}
        </Typography>
        <Box className="text-center text-[13px]  flex items-center justify-center space-x-2 text-gray-500">
          <span>Status</span> :{" "}
          {!user?.isProfileUpdated ? (
            <Box className="flex items-center justify-center space-x-1">
              <span> Not Verified</span> <MdOutlineVerified color="red" />
            </Box>
          ) : (
            <Box className="flex items-center justify-center space-x-1">
              <span> Verified</span> <MdOutlineVerified color="green" />
            </Box>
          )}
        </Box>
        <Typography className="text-center text-[13px]  text-gray-500">
          {user?.phone}, {user?.address}
        </Typography>
      </Box>
      <Box className="grid grid-cols-3 sm:w-[50%] w-[90%] mt-10 m-auto ">
        <Box className="flex flex-col justify-center items-center space-y-2">
          <Typography className="text-center text-[13px]">
            Total Users
          </Typography>
          <Typography className="text-center font-bold text-[13px]">
            300
          </Typography>
        </Box>
        <Box className="flex flex-col justify-center items-center space-y-2 border-l border-r ">
          <Typography className="text-center text-[13px]">
            Total Matched
          </Typography>
          <Typography className="text-center font-bold text-[13px]">
            100
          </Typography>
        </Box>
        <Box className="flex flex-col justify-center items-center space-y-2">
          <Typography className="text-center text-[13px]">
            Total Earnings
          </Typography>
          <Typography className="text-center font-bold text-[13px]">
            N50,000,00.00
          </Typography>
        </Box>
      </Box>
      <Box className="flex items-center mt-10 justify-center">
        <Link to="/dashboard/profile/update-profile">
          <Button size="sm">Update Profile</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ProfileDetails;
