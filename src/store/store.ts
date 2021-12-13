import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import bvnReducer from "./../services/bvn-api";
import otpReducer from "./../services/otp-api";
import { dropDowns } from "../services/dropDowns";
import openSchAccReducer from './../services/openSchAcc';

export const store = configureStore({
  reducer: {
    [dropDowns.reducerPath]: dropDowns.reducer,
    bvnReducer,
    otpReducer,
    openSchAccReducer
  },
  middleware: (gdm) => gdm().concat(dropDowns.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,  
  Action<string>
>;
