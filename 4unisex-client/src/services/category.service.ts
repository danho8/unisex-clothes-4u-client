import baseUrl from "@/constants/baseUrl"
import axios from "axios"

class CategoryService {
    async getAllCategory() {
        try {
            return await axios.get(`${baseUrl}/landing/category/list`)
        } catch (error) {
            throw error
        }
    }
}

export default CategoryService