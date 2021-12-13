import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  bvnValidationUrl,
  OtpAuth,
  password,
  userName,
} from "../utils/constant";
import axios from "axios";
import { DataProps } from "../interfaces";

interface initState {
  bvn: string;
  error: any;
  loading: boolean;
  error2: any;
  data: DataProps;
  isSuccessful: boolean;
}

const initialState: initState = {
  bvn: "",
  error: "",
  loading: false,
  error2: "",
  data: <DataProps>{},
  isSuccessful: false,
};

export interface justProp {
  bvn?: string;
  _package?: number;
  school?: number;
  history?: any;
}

export const validateBvn = createAsyncThunk(
  "validateBvn",
  async (data: justProp, { rejectWithValue }) => {
    try {
      const token = Buffer.from(`${userName}:${password}`).toString("base64");
      const { history, ...rest } = data;

      const response = await axios.post(bvnValidationUrl, rest, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });
      if (response.data.responseCode === "00") {
        console.log(">>>>>>response", response);
        
        history.push(OtpAuth);
        return response.data;
      }
      if (response.data.responseCode === "98") {
        console.log(">>>>>>respcddkd", response.data);

        return response.data;
      }
      if (response.data.responseMessage === "Invalid BVN") {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (e: any) {
      console.log("e", e);

      return rejectWithValue(e.response.data);
    }
  }
);

export const BvnSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(validateBvn.rejected, (state, action) => {
      state.error = action.error;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(validateBvn.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.error = "";
      if (state.data.responseCode === "00") {
        state.isSuccessful = true;
        localStorage.setItem("bvnSuccess", JSON.stringify(state.isSuccessful));
      }
    });
    builder.addCase(validateBvn.pending, (state, action) => {
      state.loading = true;
      state.data = <DataProps>{};
      state.error = action.payload;
    });
  },
});

// "22277557146

export default BvnSlice.reducer;
