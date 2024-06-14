import axios, { type AxiosError, type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import baseUrl from '../constants/baseUrl';

const BaseAxios: AxiosInstance = axios.create({
    baseURL: baseUrl,
});

BaseAxios.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        try {
            const token: string | null | undefined = localStorage.getItem('token');
            config.headers.Authorization = `Bearer ${token}`;

            return config;
        } catch (e) {
            return await Promise.reject(e);
        }
    },
    async (error) => {
        return await Promise.reject(error);
    },
);

BaseAxios.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error: AxiosError) => {
        return await Promise.reject(error);
    },
);

export default BaseAxios;
