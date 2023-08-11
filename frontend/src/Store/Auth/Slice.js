import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const login_end = "http://localhost:3000/auth";

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    const data = await axios.post(login_end, { email, password ,usertype:"VIEWER"});
        console.log(data)
    return { data: data.data, status: data.status };
  }
);

export const AuthSlice = createSlice({
  initialState: {
    isAuth: false,
    user: {},
    loading: false,
  },
  name: "Auth",
  reducers: {
    logout: (state, action) => {
      state = { isAuth: false, user: {} };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload.data) {
          state.isAuth = true;
          state.user = action.payload.data;
          state.loading = false;
        } else {
          state.isAuth = false;
          state.user = {};
          state.loading = false;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuth = false;
        state.user = {};
        state.loading = false;
      });
  },
});


export default AuthSlice.reducer




