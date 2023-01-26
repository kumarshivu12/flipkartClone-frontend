import axios from 'axios';

const URL='http://127.0.0.1:8000';

export const authenticateSignup=async (data)=>{
    try {
        return await axios.post(`${URL}/signup`,data)
    } catch (error) {
        console.warn('error while calling signup api',error.message)
    }
}


export const authenticateLogin=async (data)=>{
    try {
        return await axios.post(`${URL}/login`,data)
    } catch (error) {
        console.warn('error while calling login api',error.message);
        return error.response;
    }
}