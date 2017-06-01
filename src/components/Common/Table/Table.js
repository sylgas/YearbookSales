import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import {array} from "prop-types";
import "./table.less";

function Table({headers, children}) {
    return (
        <table className="ys-table">
            <thead><TableHeader headers={headers}/></thead>
            <tbody>{children}</tbody>
        </table>
    )
}

Table.propTypes = {
    headers: array
};

Table.defaultProps = {
    headers: []
};

export default Table;