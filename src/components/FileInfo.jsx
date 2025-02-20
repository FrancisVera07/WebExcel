export const FileInfo = ({ fileName, error }) => {
    /**
     * Renderiza la el nombre del archivo cargado o error
     */
    return (
        <>
            {fileName &&
                <p className={"text-lg font-semibold text-center"}>
                    Archivo: {fileName}
                </p>
            }
            {error &&
                <p className={"text-red-500 text-center"}>
                    {error}
                </p>
            }
        </>
    )
}