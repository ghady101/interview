import axiosInstance from './axios';

// call the backend apis
export const getDatas = async ({ page }) => {
	try {
		const pageQuery = page ? page : 1;
		const response = await axiosInstance.get(`data/datas?page=${pageQuery}`);

		if (response.status !== 200) {
			throw new Error(response.data.message);
		}

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const getData = async ({ firstName }) => {
	try {
		const response = await axiosInstance.get(`data/${firstName}`);

		if (response.status !== 200) {
			throw new Error(response.data.message);
		}

		return response.data;
	} catch (error) {
		console.log(error);
	}
};
