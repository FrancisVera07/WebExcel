import { useDropzone } from "react-dropzone"
import {FileDropzone} from "./components/FileDropzone.jsx"
import {FileInfo} from "./components/FileInfo.jsx"
import {FileActions} from "./components/FileActions.jsx"
import {FileTable} from "./components/FileTable.jsx"
import {userFileUpload} from "./hooks/userFileUpload.js"
import exelFile from "./services/exelFile.js";

const App = () => {

    // Variables de la función userFileUpload()
    const {
        fileData,
        fileName,
        error,
        onDrop,
        setFileData,
        setFileName,
        setError,
        excel
    } = userFileUpload()

    // Extenciones permitidas
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: ".xlsx,.xls",
    })

    /**
     * Función para guardar el archivo
     */
    const handleUpload = async () => {
        if (excel) {
            const formData = new FormData();
            formData.append("file", excel)

            try {
                await exelFile(excel);
            } catch (e) {
                console.error(e)
            }
        }
    }

    /**
     * Función para eliminar el archivo
     */
    const handleDelete = () => {
        setFileData(null)
        setFileName("")
        setError("")
    }

    return (
        <div className="p-4 space-y-4">
            <FileDropzone getInputProps={getInputProps} getRootProps={getRootProps} />
            <FileInfo fileName={fileName} error={error} />

            {fileData && (
                <>
                    <FileActions handleUpload={handleUpload} handleDelete={handleDelete} />
                    <FileTable fileData={fileData} />
                </>
            )}
        </div>
    )
}

export default App

