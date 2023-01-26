import axios from 'axios';
import { GET_PRODUCT_DETAILS_FAIL, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS } from '../constants/Constant';

const URL='http://127.0.0.1:8000';
export const getProducts =()=> async (dispatch) => {
    try {
        let {data} =await axios.get(`${URL}/products`);
        dispatch({type:GET_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_PRODUCT_FAIL,payload:error.message})
    }
}
export const getProductDetails=(id)=>async(dispatch)=>{
    try {
        dispatch({type:GET_PRODUCT_DETAILS_REQUEST});
        let {data} =await axios.get(`${URL}/product/${id}`);
        dispatch({type:GET_PRODUCT_DETAILS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_PRODUCT_DETAILS_FAIL,payload:error.message})
    }
}