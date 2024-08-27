import authSlice from "@/services/features/auth/authSlice";
import referralSlice from "@/services/features/referral/referralSlice";
import supportSlice from "@/services/features/support/supportSlice";
import userSlice from "@/services/features/user/userSlice";
import walletSlice from "@/services/features/wallet/walletSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    referral: referralSlice,
    wallet: walletSlice,
    support: supportSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
