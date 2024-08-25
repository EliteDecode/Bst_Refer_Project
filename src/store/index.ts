import authSlice from "@/services/features/auth/authSlice";
import userSlice from "@/services/features/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
