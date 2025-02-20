export const FileTable = ({ fileData }) => {
    /**
     * Renderiza la tabla con los datos del archivo
     */
    return (
        <div className={"p-4 overflow-auto border border-gray-300 rounded-lg"}>
            <table className={"w-full border-collapse border border-gray-300"}>
                <thead>
                <tr>
                    {Object.keys(fileData[0]).map((key) => (
                        <th key={key} className={"border border-gray-300 p-2"}>
                            {key}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {fileData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {Object.values(row).map((value, colIndex) => (
                            <td key={colIndex} className={"border border-gray-300 p-2"}>
                                {value}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}