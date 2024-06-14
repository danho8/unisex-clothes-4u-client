import { AxiosResponse } from "axios";
import BaseAxios from "../configs/axios.config";

class ProductService {
  async getListProduct() {
    try {
      return (await BaseAxios.get("/cms/product/list")) as AxiosResponse;
    } catch (error) {
      throw error;
    }
  }

  async getProductDetail(id: number) {
    try {
      return (await BaseAxios.get(
        `/cms/product/detail/${id}`
      )) as AxiosResponse;
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(productId: number) {
    try {
      return (await BaseAxios.delete(
        `/cms/product/${productId}`
      )) as AxiosResponse;
    } catch (error) {
      throw error;
    }
  }

  async deleteProductOption(productId: number, productOptionId: number) {
    try {
      return (await BaseAxios.delete(
        `/cms/product/${productId}/${productOptionId}`
      )) as AxiosResponse;
    } catch (error) {
      throw error;
    }
  }

  async createProduct(data: any) {
    try {
      return await BaseAxios.post("/cms/product/create", data);
    } catch (error) {
      throw error;
    }
  }

  async createProductoptions(data: any) {
    try {
      return await BaseAxios.post("/cms/product/create/product-option", data);
    } catch (error) {
      throw error;
    }
  }

  async editProduct(data: any) {
    try {
      return await BaseAxios.put("/cms/product/update", data);
    } catch (error) {
      throw error;
    }
  }

  async editProductOption(data: any) {
    try {
      return await BaseAxios.put("/cms/product/update/product-option", data);
    } catch (error) {
      throw error;
    }
  }
}

export default ProductService;
