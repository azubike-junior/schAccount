import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//used redux toolkit query 

export const dropDowns = createApi({
  reducerPath: "dropDown",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://10.11.200.97/SchoolConnect`,
  }),

  endpoints: (builder) => ({
    getSchools: builder.query({
      query: () => `/GetAllSchools`,
    }),
    getPackages: builder.query({
      query: () => `GetAllPackages`,
    }),
  }),
});


// "22277557146
export const { useGetPackagesQuery, useGetSchoolsQuery } = dropDowns;
