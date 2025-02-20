export const FileActions = ({ handleUpload, handleDelete }) => {
    /**
     * Renderiza los botones para subir y eliminar el archivo
     */
    return (
        <div className={"flex space-x-4 mt-4 justify-center"}>
            <button
                onClick={handleUpload}
                className={"px-4 py-2 bg-blue-500 text-white rounded-lg"}>
                Subir
            </button>
            <button
                onClick={handleDelete}
                className={"px-4 py-2 bg-red-500 text-white rounded-lg"}>
                Eliminar
            </button>
        </div>
    )
}
