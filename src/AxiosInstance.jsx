import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "https://onlineartdatabase.pythonanywhere.com/api/?format=json",
})

export default AxiosInstance;