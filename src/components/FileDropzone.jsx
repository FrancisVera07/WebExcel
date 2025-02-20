export const FileDropzone = ({ getRootProps, getInputProps }) => {

    /**
     * Renderiza el componente FileDropzone.
     */
    return (
        <div
            {...getRootProps()}
            className={"border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer rounded-lg"} >
            <input {...getInputProps()} />
            <p className={"text-gray-500"}>
                Arrastra y suelta un archivo Excel aquí, o haz clic para seleccionarlo
            </p>
        </div>
    )
}
