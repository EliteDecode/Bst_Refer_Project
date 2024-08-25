import { ConfirmCodeForm } from "@/components/dashboard_components/forms/ConfirmCodeForm";
import { Box } from "@mui/material";

const VerifyEmail = () => {
  return (
    <Box className="flex items-center justify-center">
      <Box className="w-[40%] border items-center justify-center p-3 shadow-md bg-white rounded-md">
        <ConfirmCodeForm />
      </Box>
    </Box>
  );
};

export default VerifyEmail;
