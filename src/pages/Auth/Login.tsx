import LoginForm from "@/components/auth/LoginForm";
import { Box } from "@mui/material";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box className="sm:w-[26%] w-[95%] border-white m-auto rounded-lg bg-white  p-5 flex flex-col items-center justify-center">
      <Box className="w-full">
        <Typography
          className="text-[22px] font-bold"
          style={{ fontFamily: "segoe ui" }}>
          Welcome Back.
        </Typography>
        <Typography className="text-[20px] font-semibold -mt-1 text-[#acaba9]">
          Please login to your account
        </Typography>
        {/* <SignUpOptions /> */}
        <LoginForm />
        <Box>
          <Typography className="text-[11px]">
            Don't have an account?{" "}
            <Link to="/auth/register">
              <span className="text-primary hover:underline font-bold cursor-pointer">
                Sign Up
              </span>
            </Link>
          </Typography>
          <Typography className="text-[11px]">
            Forgot Password?{" "}
            <Link to="/auth/forgot-password">
              <span className="text-primary hover:underline font-bold cursor-pointer">
                Forgot Password
              </span>
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
