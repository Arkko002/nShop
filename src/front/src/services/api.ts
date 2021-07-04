import axios, {AxiosError, AxiosResponse} from "axios";
import config from "../config.json";


const responseSuccessHandler = (response: AxiosResponse<any>) => {
	return response.data;
};

const responseErrorHandler = (error: Error | AxiosError) => {
	let errors = [];

	if (axios.isAxiosError(error)) {
		if (error.response) {
			if (error.response.data.errors)
				errors = error.response.data.errors;
			if (error.response.data.error)
				errors = [error.response.data.error];
		}

		return Promise.reject({
			status: error.response?.status,
			errors: errors
		});
	} else {
		return Promise.reject({error: error});
	}
};

axios.interceptors.response.use(
	response => responseSuccessHandler(response),
	error => responseErrorHandler(error)
);

export default axios.create({
	baseURL: config.baseUrl,
	timeout: 1000,
});
