import {
  AddProductError,
  AddProductStart,
  AddProductSuccess,
  fetchAllProductsError,
  fetchAllProductsStart,
  fetchAllProductsSuccess,
} from "../slices/userSlice";
import axios from "axios";

export const AddProduct = async (data, dispatch, setOpen = () => {}) => {
  dispatch(AddProductStart());
  try {
    const response = await axios.post(
      "http://localhost:8005/api/product/add-product",
      data,
      { withCredentials: true }
    );
    console.log(response.data);
    dispatch(AddProductSuccess(response.data));
    setOpen(false);
  } catch (error) {
    console.log(error);
    dispatch(AddProductError(error.response));
  }
};

export const fetchAllProducts = async (dispatch) => {
  dispatch(fetchAllProductsStart());
  try {
    const response = await axios.get(
      "http://localhost:8005/api/product/all-products"
    );
    dispatch(fetchAllProductsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(fetchAllProductsError(error.response));
  }
};