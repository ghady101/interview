import axios from 'axios';

// define base and credentials to pass cookies with it
const axiosInstance = axios.create({
	baseURL: 'http://localhost:5000/',
	withCredentials: true,
});

export default axiosInstance;
