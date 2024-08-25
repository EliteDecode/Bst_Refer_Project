import axiosClient from "@/services/api/axiosClient";
import {
  IForgotPassword,
  ILogin,
  IRegister,
  IVerify,
  IResetPassword,
} from "@/types/auth.types";

const login_user = async (userData: ILogin) => {
  const response = await axiosClient.post(`/auth/login`, userData);

  if (response.data.success === true) {
    localStorage.setItem(
      "BST_access_Token",
      JSON.stringify(response.data.data.accessToken)
    );
    localStorage.setItem(
      "BST_refresh_Token",
      JSON.stringify(response.data.data.refreshToken)
    );
  }
  return response.data;
};

const register_user = async (userData: IRegister) => {
  const response = await axiosClient.post(`/auth/register`, userData);

  if (response.data.success === true) {
    localStorage.setItem("BST_reg_data", JSON.stringify(response.data.data));
  }
  return response.data;
};

const verify_user = async (userData: IVerify) => {
  const response = await axiosClient.post(`/auth/verify/${userData._id}`, {
    authCode: userData.authCode,
  });

  if (response.data.success === true) {
    localStorage.setItem("BST_reg_data", JSON.stringify(response.data.data));
  }
  return response.data;
};

const forgot_password = async (userData: IForgotPassword) => {
  const response = await axiosClient.post(`/auth/forgot-password`, {
    email: userData.email,
  });

  return response.data;
};

const reset_password = async (userData: IResetPassword) => {
  const response = await axiosClient.post(`/auth/reset-password`, userData);

  return response.data;
};
const logout_user = async () => {
  const refreshToken = localStorage.getItem("BST_refresh_Token");
  if (!refreshToken) {
    return;
  }

  const response = await axiosClient.post("/auth/logout", {
    refreshToken: JSON.parse(refreshToken),
  });

  if (response.data.success === true) {
    localStorage.removeItem("BST_access_Token");
    localStorage.removeItem("BST_refresh_Token");
    localStorage.removeItem("BST_user_details");
  }

  return response.data;
};

const authService = {
  login_user,
  logout_user,
  register_user,
  verify_user,
  reset_password,
  forgot_password,
};

export default authService;
