import authSlice from "@/services/features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
