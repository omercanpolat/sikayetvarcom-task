import axios from "axios"
import { useSelector } from "react-redux"

const useAxios = () => {
  const { token } = useSelector((state) => state.auth)

  const axiosPublic = axios.create({
    baseURL: "https://12169.fullstack.clarusway.com/",
    // baseURL:"https://dummyjson.com/",
  });

  const axiosWithToken = axios.create({
    baseURL: "https://12169.fullstack.clarusway.com/",
    // baseURL: "https://dummyjson.com/users/",
    headers: { Authorization: `Token ${token}` },
  });

  return { axiosWithToken, axiosPublic }
}

export default useAxios
