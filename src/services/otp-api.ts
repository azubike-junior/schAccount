import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { OtpProp } from "../interfaces";
import {
  otpValidationUrl,
  password,
  tokenExpired,
  userName,
} from "./../utils/constant";

interface OtpState {
  error: any;
  loading: boolean;
  data: OtpProp;
  isSuccessful: boolean;
}

const initialState: OtpState = {
  error: "",
  loading: false,
  data: {},
  isSuccessful: false,
};

export const validateOtp = createAsyncThunk(
  "validateOtp",
  async (data: OtpProp, { rejectWithValue }) => {
    console.log(">>>>>data", data);

    try {
      const token = Buffer.from(`${userName}:${password}`).toString("base64");
      const response = await axios.post(otpValidationUrl, data, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });
      if (response.data.responseCode === "00") {
        data.history.push("/confirm_user");
        return response.data;
      }
      if (response.data.responseDescription === "Invalid Token") {
        return response.data;
      }

      if (response.data.responseDescription === tokenExpired) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (e: any) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const OtpSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(validateOtp.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
    builder.addCase(validateOtp.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      const user_ = {
        lastName: action.payload?.lastName,
        firstName: action.payload?.firstName,
        phoneNumber: action.payload?.phoneNumber,
        referenceId: action.payload?.referenceId,
      };
      localStorage.setItem("user_", JSON.stringify(user_));
      state.loading = false;
      state.error = "";
    });
    builder.addCase(validateOtp.pending, (state) => {
      state.loading = true;
    });
  },
});

// "22277557146 22209495399

export default OtpSlice.reducer;
