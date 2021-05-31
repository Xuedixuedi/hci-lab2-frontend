import axios from "axios"
const base = "http://10.20.30.227:5000/"

export const postImg = params => {
    return axios.post(`${base}/imgUpload`, {
        params
    })
}
