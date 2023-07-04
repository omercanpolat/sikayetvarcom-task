import axios from "axios";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BASE_URL = "https://12169.fullstack.clarusway.com/";
  // const BASE_URL =    "https://dummyjson.com/docs/users/";

  const login = async (userInfo) => {
    dispatch(fetchStart());
    //? istek attığımız yerlerde dispatch yayınlamamız lazım. istek attıgımız yer neresi  ? =login fonk. içinde
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
    
      navigate("/stock");
      
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
     
      console.log(error);
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
  
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/register/`,
        userInfo
      );
      dispatch(registerSuccess(data));
      
      navigate("/stock");
     
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
     
      console.log(error);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
  
    try {
      const { data } = await axios.post(`${BASE_URL}account/auth/logout/`);
      dispatch(logoutSuccess(data));
    
      navigate("/");
     
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { login, register, logout };
};

export default useAuthCall;
