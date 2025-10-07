import axios from "../../api/axiosconfig";
import { toast } from "react-toastify";
import { loadusers } from "../reducers/userSlice";

export const asyncCurrentUser = () => async (dispatch, getstate) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loadusers(user));
    else console.log("user not log");
    
  } catch (error) {
    toast.error(error.message || "Something went wrong ❌");


    
  }
};

export const asyncLogoutUser = (user) => async (dispatch, getstate) => {
  try {
   localStorage.removeItem("user")
   console.log("user logout");
   
  } catch (error) {
    toast.error(error.message || "Something went wrong ❌");
  }
};

export const asyncLoginUser = (user) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get(
      `users?email=${user.email}&password=${user.password}`,
      user
    );
    console.log(data[0]);
    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (error) {
    toast.error(error.message || "Something went wrong ❌");
  }
};

export const asyncRegisterUser = (user) => async (dispatch, getstate) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);
  } catch (error) {
    toast.error(error.message || "Something went wrong ❌");
  }
};
