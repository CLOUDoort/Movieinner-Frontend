import axios from 'axios'
const PORT = 3714

export const apiInstance = axios.create({
    baseURL: `http://localhost:${PORT}/`,
})
