import axios, { AxiosError, AxiosResponse } from "axios";
import baseUrl from "../constants/baseUrl";
import BaseAxios from "../configs/axios.config";

class AuthService {
  async login(email: string, password: string) {
    try {
      const response = (await axios.post(`${baseUrl}/landing/auth/sign-in`, {
        email,
        password,
      })) as AxiosResponse;
      return response;
    } catch (error) {
      throw error;
    }
  }

  async register(email: string, password: string) {
    try {
      const response = (await axios.post(`${baseUrl}/landing/auth/sign-up`, {
        email,
        password,
      })) as AxiosResponse;
      return response;
    } catch (error) {
      throw error;
    }
  }

  async registerConfirm(email: string, token: string) {
    try {
      const response = (await axios.post(
        `${baseUrl}/landing/auth/sign-up/confirm`,
        {
          email,
          token,
        }
      )) as AxiosResponse;
      return response;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      return await BaseAxios.post("/cms/auth/sign-out");
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
