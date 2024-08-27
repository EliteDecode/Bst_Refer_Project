import { Box } from "@mui/material";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { MdOutlineVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaNairaSign } from "react-icons/fa6";

const ProfileDetails = () => {
  const { user } = useSelector((state: any) => state.user);
  const { referrals } = useSelector((state: any) => state.referral);
  const { wallets } = useSelector((state: any) => state.wallet);

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
            Total Referrals
          </Typography>
          <Typography className="text-center font-bold text-[13px]">
            {referrals?.length}
          </Typography>
        </Box>
        <Box className="flex flex-col justify-center items-center space-y-2 border-l border-r ">
          <Typography className="text-center text-[13px]">
            Total Matched
          </Typography>
          <Typography className="text-center font-bold text-[13px]">
            {referrals?.filter((item: any) => item?.isMatched === true)?.length}
          </Typography>
        </Box>
        <Box className="flex flex-col justify-center items-center space-y-2">
          <Typography className="text-center text-[13px]">
            Total Earnings
          </Typography>
          <Box className="flex items-center space-x-1">
            <FaNairaSign size={12} />{" "}
            <Typography className="text-center font-bold text-[13px]">
              {wallets?.total?.toLocaleString()}
            </Typography>
          </Box>
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
