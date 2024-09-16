import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  fullname: Yup.string()
    .min(2, "Fullname is too short")
    .required("Fullname is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null as unknown as string],
      "Passwords must match"
    )
    .required("Confirm Password is required"),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null as unknown as string],
      "Passwords must match"
    )
    .required("Confirm Password is required"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const withdrawalSchema = Yup.object().shape({
  amount: Yup.number().required("Withdrawal Amount is required"),
});

export const changeEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

//AddUSer Schema
export const addReferralSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Fullname is too short")
    .required("Fullname is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  course: Yup.string().required("Course is required"),
});

//Send Comlaint
export const sendComplaintSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "Title of complaint is too short")
    .required("Title of complaint is required"),
  message: Yup.string()
    .min(15, "Message of complaint is too short")
    .required("Message of complaint is required"),
});

//AddUSer Schema
export const updateProfileSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Fullname is too short")
    .required("Fullname is required"),
  username: Yup.string()
    .min(2, "Username is too short")
    .required("Username is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  bstId: Yup.string().required("BST Unique ID is required"),
});

//ForgotPassword Schema
export const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Current Password is required"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("New Password is required"),
  confirmNewPassword: Yup.string()
    .oneOf(
      [Yup.ref("newPassword"), null as unknown as string],
      "Passwords must match"
    )
    .required("Confirm Password is required"),
});

export const confirmCodeSchema = Yup.object().shape({
  pin: Yup.string()
    .length(5, "Your one-time password must be 5 characters.")
    .required("One-time password is required."),
});
