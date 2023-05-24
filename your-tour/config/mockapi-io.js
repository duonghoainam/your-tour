import axios from "axios";


const mockApiIoInstance = axios.create({
    baseURL: "https://645782e80c15cb14820a51c8.mockapi.io/",
})

export default mockApiIoInstance;