export interface initialUserStateProps {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  user: IUser | null;
}

export interface IUser {
  fullname: string;
  address: string;
  phone: string;
  email?: string;
  referralCode?: string;
  _id?: string;
  isSuspended?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IChangePassword {
  newPassword: string;
  confirmNewPassword: string;
  oldPassword: string;
}
