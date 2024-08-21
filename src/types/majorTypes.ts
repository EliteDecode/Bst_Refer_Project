// Navbar Types

export type NavbarLinksProps = {
  title: string;
};

export type NavbarMiniLinksProps = {
  title: string;
  path: string;
};

//Testimonials types

export type TestimonialsProps = {
  name: string;
  position: string;
  testimonial: string;
  companyName: string;
  aboutProject: string;
  companyLocation: string;
  image: string;
};

//How it Works Types
export type HowItWorksProps = {
  title: string;
  description: string;
  image: string;
};

//Faqa
export type FaqProps = {
  question: string;
  answer: string;
};

//Services Rendered
export type ServicesProps = {
  title: string;
  description: string;
  icon: string;
  abbr?: string;
};

//Dashboard Navbar Props
export type DashboardNavbarProps = {
  setIsSidebar: (value: boolean) => void;
  isSidebar: boolean;
};

//InfoCardDisplay Dashboard Props
export type InfoCardDisplayProps = {
  title: string;
  description: number | string;
  link: string;
  buttonText: string;
  image: string;
};

//Users Props
export type UserProps = {
  fullname: string;
  email: string;
  phone: string;
  address: string;
  status: "pending" | "successful";
  course: string;
};

//Transaction Props
export type TransactionProps = {
  fullname: string;
  email: string;
  phone: string;
  amount: number;
  date: string;
  status: "pending" | "paid";
};

//Login Type

export type ILogin = {
  email: string;
  password: string;
};

//Register Type

export type IRegister = {
  email: string;
  password: string;
  confirmPassword: string;
  fullname: string;
};

//Verify

export type IVerify = {
  authCode: number;
  _id: string;
};

//forgot password

export type IForgotPassword = {
  email: string;
};

//rest password
export type IResetPassword = {
  password: string;
  confirmPassword: string;
  token: string;
};

// authType
export type initialAuthStateProps = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  token: string | null;
  user?: {
    fullname: string;
    address: string;
    phone: string;
    email: string;
    referralCode: string;
    _id: string;
    isSuspended: boolean;
    createdAt: Date;
    updatedAt: Date;
  } | null;
};
