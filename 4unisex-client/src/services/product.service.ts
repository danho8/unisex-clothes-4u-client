import baseUrl from "@/constants/baseUrl"
import axios from "axios"

class ProductService {
    async getAllProducts(param?: any) {
        try {
            return await axios.get(`${baseUrl}/landing/product/list`, { params: param })
        } catch (error) {
            throw error
        }
    }

    async getDetailsProduct(id: any) {
        try {
            return await axios.get(`${baseUrl}/landing/product/detail/${id}`)
        } catch (error) {
            throw error
        }
    }

    async getSuggestProduct(idCategory: any) {
        try {
            return await axios.get(`${baseUrl}/landing/product/detail/relation/${idCategory}`)
        } catch (error) {
            throw error
        }
    }
}

export default ProductService