import { ConfirmCodeForm } from "@/components/auth/ConfirmCodeForm";
import useConfirmCodeForm from "@/hooks/form-hooks/useConfirmCodeForm";
import { Box } from "@mui/material";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const ConfirmCode = () => {
  const { user } = useConfirmCodeForm();
  return (
    <Box className="sm:w-[26%] w-[95%] border-white m-auto rounded-lg bg-white  p-5 flex flex-col items-center justify-center">
      <Box className="text-center w-full">
        <Typography
          className="text-[22px] font-bold"
          style={{ fontFamily: "segoe ui" }}>
          Verification code.
        </Typography>
        <Typography className="text-[12px] font-semibold -mt-1 text-[#acaba9]">
          A 5-digit code has been sent to your email address{" "}
          <span className="font-bold">{user?.email}.</span>
        </Typography>

        <ConfirmCodeForm />
      </Box>
    </Box>
  );
};

export default ConfirmCode;
