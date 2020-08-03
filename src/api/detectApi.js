import axiosClient from './axiosClient'


const detectApi = {
    detect: (data) => {
        const url = "/detections";
        return axiosClient.post(url, data)
    },
    image: (data) => {
        const url = "/image";
        return axiosClient.post(url, data)
    }
}

export default detectApi