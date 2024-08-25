import authSlice from "@/services/features/auth/authSlice";
import referralSlice from "@/services/features/referral/referralSlice";
import userSlice from "@/services/features/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    referral: referralSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
