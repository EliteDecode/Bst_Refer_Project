export interface initialReferralStateProps {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  singleReferral: IReferral | null;
  referrals: IReferral[] | null;
}

export interface IReferral {
  fullname: string;
  address?: string;
  phone: string;
  email: string;
  course: string;
  referredBy?: string;
  isMatched?: boolean;
  _id?: string;
  isSuspended?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IReferralTable {
  fullname: string;
  phone: string;
  email: string;
  course: string;
  isMatched: boolean;
  createdAt: Date;
  _id: string;
}
