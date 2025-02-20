import {useCallback, useState} from "react";
import * as XLSX from "xlsx";

export const userFileUpload = () => {
    const [fileData, setFileData] = useState(null)
    const [fileName, setFileName] = useState("")
    const [error, setError] = useState("")

    /**
     * Función que se ejecuta cuando se arrastra un archivo sobre el componente
     * @type {(function(*): void)|*} retorna la información del archivo
     */
    const onDrop = useCallback((acceptedFiles) => {
        setError("")
        const file = acceptedFiles[0]
        setFileName(file.name)

        const reader = new FileReader()
        reader.onload = (e) => {
            try {
                const binaryStr = e.target.result;
                const workbook = XLSX.read(binaryStr, { type: "binary" })
                const sheetName = workbook.SheetNames[0]
                const sheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(sheet);

                if (jsonData.length === 0) {
                    throw new Error("Archivo inválido")
                }

                setFileData(jsonData)
            } catch (err) {
                setError("Archivo inválido: " + err.message)
                setFileData(null);
            }
        }
        reader.readAsBinaryString(file)
    }, [])

    return { fileData, fileName, error, onDrop, setFileData, setFileName, setError }
}