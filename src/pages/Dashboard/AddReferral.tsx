import AddReferralForm from "@/components/dashboard_components/forms/AddReferralForm";
import { Box } from "@mui/material";
import { Typography } from "antd";

const AddReferral = () => {
  return (
    <Box className="sm:w-[40%] w-[100%] rounded-md shadow-md bg-white m-auto border p-5 mt-5 ">
      <Typography
        className="text-[17px] font-bold"
        style={{ fontFamily: "eczar" }}>
        Add New Referral.
      </Typography>
      <Typography className="text-[12px] font-semibold -mt-1 text-[#acaba9]">
        Please enter referral details below
      </Typography>
      <Box>
        <AddReferralForm />
      </Box>
    </Box>
  );
};

export default AddReferral;
