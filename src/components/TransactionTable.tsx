interface TransactionTableProps {
    th: string[];              // Array of table headers (strings)
    td: string[][];            // 2D array for table data (rows and columns)
}

export default function TransactionTable({ th, td }: TransactionTableProps) {
    return (
        <table className="w-full border-collapse">
            {/* Table Header */}
            <thead>
                <tr>
                    {th.map((header, index) => (
                        <th
                            key={index}
                            className="text-left text-xs font-semibold text-gray-100 uppercase py-2 border-b border-dashed border-gray-300"
                        >
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            
            {/* Table Body */}
            <tbody>
                {td.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {/* Add a column for the serial number */}
                        <td className="py-3 border-b border-dashed border-gray-400">
                            {rowIndex + 1}
                        </td>
                        {row.map((data, colIndex) => (
                            <td key={colIndex} className="py-3 border-b border-dashed border-gray-400">
                                {data}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
