import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        'Content-Type': 'multipart/form-data'
    },
})

axiosClient.interceptors.request.use(async config => {
    // console.log(config);
    return config
})

axiosClient.interceptors.response.use(response => {
    if (response && response.data) {
        // console.log("Response.data: ", response.data);
        return response.data
    }
    else {
        // console.log("Response: ", response);
        return response
    }
}, error => {
    // console.log("Error: ", error);
    throw error
})

export default axiosClient