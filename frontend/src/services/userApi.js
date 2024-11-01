import axiosInstance from './axios';

// call the backend api
export const userSignup = async ({ name, email, password }) => {
	try {
		const response = await axiosInstance.post('user/register', {
			name,
			email,
			password,
		});

		if (response.status !== 200) {
			throw new Error(response.data.message);
		}

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const userLogin = async ({ email, password }) => {
	try {
		const response = await axiosInstance.post('user/login', {
			email,
			password,
		});

		if (response.status !== 200) {
			throw new Error(response.data.message);
		}

		return response.data.user;
	} catch (error) {
		console.log(error);
	}
};

export const currentUser = async () => {
	try {
		const response = await axiosInstance.get('user/currentUser');

		if (response.status !== 200) {
			throw new Error(response.data.message);
		}

		return response.data.user;
	} catch (error) {
		console.log(error);
	}
};

export const userLogout = async () => {
	try {
		const response = await axiosInstance.get('user/logout');

		if (response.status !== 200) {
			throw new Error(response.data.message);
		}

		return response.data.message;
	} catch (error) {
		console.log(error);
	}
};

// not completed and the create the recomend
export const userRecomended = async () => {
	try {
		const response = await axiosInstance.get('user/add');

		if (response.status !== 200) {
			throw new Error(response.data.message);
		}

		return response.data;
	} catch (error) {
		console.log(error);
	}
};
