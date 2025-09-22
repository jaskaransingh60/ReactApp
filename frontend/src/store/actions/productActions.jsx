import axios from "../../api/axiosconfig";
import { toast } from "react-toastify";
import { loadproduct } from "../reducers/productSlice";

export const asyncLoadProduct = () => async(dispatch , getState)=>{
  try {
     const {data} =await axios.get("/products");
     dispatch(loadproduct(data))
  } catch (error) {
     toast.error(error.message || "Something went wrong ❌");
  }
}

export const asyncCreateProduct = (Products) => async(dispatch, getState) => {
  try {
    await axios.post("/products", Products);
    dispatch(asyncLoadProduct())
    
  } catch (error) {
    toast.error(error.message || "Something went wrong ❌");
  }
};

export const asyncUpdateProduct = ( id, Products) => async(dispatch, getState) => {
  try {

   await axios.patch("/products/" + id, Products);
    dispatch(asyncLoadProduct())
    
  } catch (error) {
    toast.error(error.message || "Something went wrong ❌");
  }
};

export const asyncDeleteProduct = ( id) => async(dispatch, getState) => {
  try {

   await axios.delete("/products/" + id);
    dispatch(asyncLoadProduct())
    
  } catch (error) {
    toast.error(error.message || "Something went wrong ❌");
  }
};