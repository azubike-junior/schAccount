import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AccountResponseProp } from "../interfaces";
import { openSchAccountUrl, password, userName } from "./../utils/constant";

interface openAccState {
  error: any;
  loading: boolean;
  data: AccountResponseProp;
}

const initialState: openAccState = {
  error: "",
  loading: false,
  data: {},
};

export const openSchoolAcc = createAsyncThunk(
  "openSchAcc",
  async (
    { history, referenceId }: AccountResponseProp,
    { rejectWithValue }
  ) => {
    console.log(">>>>>ref", referenceId);

    try {
      const token = Buffer.from(`${userName}:${password}`).toString("base64");
      const response = await axios.post(
        openSchAccountUrl,
        { referenceId },
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
        }
      );
      console.log(">>>>>openResponse", response.data);
      if (response.data.responseCode === "00") {
        localStorage.removeItem("user_");
        history.push("/account_success");
        return response.data;
      }
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const openSchAcc = createSlice({
  name: "openSchAcc",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(openSchoolAcc.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
    builder.addCase(openSchoolAcc.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(openSchoolAcc.pending, (state) => {
      state.loading = true;
      state.data = <AccountResponseProp>{};
    });
  },
});

// "22277557146      22296766956

export default openSchAcc.reducer;
