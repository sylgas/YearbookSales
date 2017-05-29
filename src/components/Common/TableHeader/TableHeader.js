import * as React from "react";

const TableHeader = ({headers}) => (
    <tr>
        {headers.map((header, index) => (
            <th key={header.value}>{header.label}</th>
        ))}
    </tr>
);

export default TableHeader;