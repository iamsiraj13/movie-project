import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { BASE_URL } from "../../../utils/config";
// import store from "../../app/store";
// import { ErrorToast, SuccessToast } from "../../utils/formHelper";

const getUserfromLocalStorage = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const userLocal = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: getUserfromLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  isAuthenticated: false,
  data: userLocal,
  message: "",
};
export const userLogin = createAsyncThunk(
  "auth/login",
  async (userData, { dispatch }) => {
    console.log(userData);
    dispatch(loginRequest());
    try {
      // const response = await axios.post(
      //   `http://192.168.50.246/mv/login/`,
      //   userData
      // );
      // console.log(response);
      //   localStorage.setItem("token", response.data.token);
      //   dispatch(loginSuccess(response.data.token));
      //   window.location.href = "/";
    } catch (error) {
      //   dispatch(loginFail());
    }
  }
);

// get user data
// export const getCurrentUser = createAsyncThunk(
//   "auth/getUser",
//   async (_, { dispatch }) => {
//     dispatch(getCurrentUserRequest());
//     try {
//       const response = await axios.get(`${BASE_URL}/user`, {
//         headers: {
//           Authorization: `token ${getUserfromLocalStorage}`,
//         },
//       });
//       localStorage.setItem("user", JSON.stringify(response.data[0]));
//       dispatch(getCurrentUserSuccess(response.data[0]));
//     } catch (error) {
//       dispatch(getCurrentUserFail(error.non_field_errors));
//       console.log(error);
//     }
//   }
// );

// user profile update

// get user data
// export const profileUpdateRequest = createAsyncThunk(
//   "auth/profileupdate",
//   async (formData, { dispatch }) => {
//     dispatch(profileUpdatePending());
//     try {
//       const response = await axios.post(`${BASE_URL}/user/update/`, formData, {
//         headers: {
//           Authorization: `token ${getUserfromLocalStorage}`,
//         },
//       });
//       console.log(response);
//       // localStorage.setItem("data", JSON.stringify(response.data[0]));
//       dispatch(profileUpdateSuccess(response.data));
//     } catch (error) {
//       dispatch(profileUpdateFail(error.non_field_errors));
//       console.log(error);
//     }
//   }
// );

// user profile update

// export function profileUpdateRequest(userData) {
//   // console.log(userData);
//   store.dispatch(profileUpdatePending());

//   let URL = BASE_URL + "user/update/";

//   return axios
//     .post("http://192.168.50.245:8000/user/update/", userData, {
//       headers: {
//         Authorization: `token ${localStorage.getItem("token")}`,
//       },
//     })
//     .then((res) => {
//       if (res.status === 200) {
//         console.log(res);
//         SuccessToast(res.data.status);
//         profileUpdateSuccess();

//         return true;
//       } else {
//         store.dispatch(profileUpdateFail());
//         ErrorToast(res.data.data);
//         return false;
//       }
//     })
//     .catch((err) => {
//       alert("Something Went Wrong from catch");
//       store.dispatch(profileUpdateFail());
//       return false;
//     });
// }
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isError = action.payload;
    },

    // get current user by token
    // getCurrentUserRequest: (state) => {
    //   state.isLoading = true;
    //   state.isError = false;
    // },
    // getCurrentUserSuccess: (state, action) => {
    //   state.isLoading = false;
    //   state.data = action.payload;
    //   state.isError = false;
    // },
    // getCurrentUserFail: (state, action) => {
    //   state.isLoading = false;
    //   state.isError = action.payload;
    // },

    // user profile update

    // profileUpdatePending: (state) => {
    //   state.isLoading = true;
    //   state.isError = false;
    // },
    // profileUpdateSuccess: (state, action) => {
    //   state.isLoading = false;
    //   state.isError = false;
    // },
    // profileUpdateFail: (state, action) => {
    //   state.isLoading = false;
    //   state.isError = action.payload;
    // },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFail,
  //   getCurrentUserRequest,
  //   getCurrentUserSuccess,
  //   getCurrentUserFail,
  //   profileUpdatePending,
  //   profileUpdateSuccess,
  //   profileUpdateFail,
} = authSlice.actions;
export default authSlice.reducer;
