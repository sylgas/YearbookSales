import React from "react";
import {array, string} from "prop-types";

function TableHeader({className, headers}) {
    return (
        <tr className={className}>
            {headers.map((header, index) => (
                <th key={header.value} colSpan={header.colSpan}>{header.label}</th>
            ))}
        </tr>
    )
}

TableHeader.propTypes = {
    className: string,
    headers: array
};

TableHeader.defaultProps = {
    className: '',
    headers: []
};

export default TableHeader;