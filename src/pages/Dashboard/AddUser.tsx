import AddUserForm from "@/components/dashboard_components/forms/AddUserForm";
import { Box } from "@mui/material";
import { Typography } from "antd";

const AddUser = () => {
  return (
    <Box className="sm:w-[40%] w-[90%] rounded-md shadow-md bg-white m-auto border p-5 mt-5 ">
      <Typography
        className="text-[17px] font-bold"
        style={{ fontFamily: "eczar" }}>
        Add New User.
      </Typography>
      <Typography className="text-[12px] font-semibold -mt-1 text-[#acaba9]">
        Please enter users details below
      </Typography>
      <Box>
        <AddUserForm />
      </Box>
    </Box>
  );
};

export default AddUser;
