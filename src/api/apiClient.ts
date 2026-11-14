import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8082/api",
    headers: {
        "x-booking-session-id": "react23123"
    },
});

export default api;