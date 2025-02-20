import axios from "axios";
import {ENV} from "../utils/constans.js";

const exelFile = async (file) => {
    try {
        const formData = new FormData();
        formData.append("file", file)
        const response = await axios.post(`${ENV.API_URL}${ENV.ENDPOINTS.EXCELUPLOAD}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        console.log(response)
    } catch (err) {
        console.error("Error uploading file", err);
        throw new Error("Error uploading file");
    }
}

export default exelFile