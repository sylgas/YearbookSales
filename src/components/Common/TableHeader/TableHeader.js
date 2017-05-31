import * as React from "react";
import {array} from "prop-types";

function TableHeader({headers}) {
    return (
        <tr>
            {headers.map((header, index) => (
                <th key={header.value}>{header.label}</th>
            ))}
        </tr>
    )
}

TableHeader.propTypes = {
    headers: array
};

TableHeader.defaultProps = {
    headers: []
};

export default TableHeader;