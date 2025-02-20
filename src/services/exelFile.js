import axios from "axios";
import {ENV} from "../utils/constans.js";

/**
 * Función para envíar el archivo al backend
 * @param file -> archivo
 * @returns {Promise<any>} -> Respuesta del backend
 */
const exelFile = async (file) => {
    try {
        const formData = new FormData();
        formData.append("file", file)
        const response = await axios.post(`${ENV.API_URL}${ENV.ENDPOINTS.EXCELUPLOAD}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return response.request
    } catch (err) {
        throw new Error("Error uploading file" + err.message);
    }
}

export default exelFile