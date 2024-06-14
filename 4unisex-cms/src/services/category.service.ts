import { AxiosResponse } from "axios";
import BaseAxios from "../configs/axios.config";

class CategoryService {
  async getCategory(param?: any) {
    try {
      return (await BaseAxios.get("/cms/category/list")) as AxiosResponse;
    } catch (error) {
      throw error;
    }
  }

  async deleteCategory(id: number) {
    try {
      return (await BaseAxios.delete(`/cms/category/${id}`)) as AxiosResponse;
    } catch (error) {
      throw error;
    }
  }

  async getCategoryMain() {
    try {
      return (await BaseAxios.get(
        `/cms/category/relation/parent`
      )) as AxiosResponse;
    } catch (error) {
      throw error;
    }
  }

  async getCategoryChild() {
    try {
      return (await BaseAxios.get(
        `/cms/category/relation/children`
      )) as AxiosResponse;
    } catch (error) {
      throw error;
    }
  }

  async createCategory(form: any) {
    try {
      return await BaseAxios.post("/cms/category/create", form);
    } catch (error) {
      throw error;
    }
  }

  async editCategory(id: any, form: any) {
    try {
      return await BaseAxios.put(`/cms/category/${id}`, form);
    } catch (error) {
      throw error;
    }
  }
}

export default CategoryService;
