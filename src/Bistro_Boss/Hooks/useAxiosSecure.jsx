import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {userSignOut} = useContext(AuthContext)
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token')
        
        config.headers.authorization = `Bearer ${token}`
        return config;
      }, function (error) {
        return Promise.reject(error);
        }
    )
    axiosSecure.interceptors.response.use((response) => {
        return response
    }, async (error) => {
        const status = error.response.status
        if(status === 401 || status === 403)
        {
            await userSignOut()
            navigate('/signIn')
        }
        return Promise.reject(error)
    }
    )
    return axiosSecure
};

export default useAxiosSecure;