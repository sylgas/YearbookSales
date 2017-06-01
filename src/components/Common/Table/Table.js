import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import {object} from "prop-types";
import {map} from "lodash";
import "./table.less";

function Table({headersMap, children}) {
    const renderHeaders = () =>
        map(headersMap, (header, type) => (
            <TableHeader className={type} key={type} headers={header}/>
        ));

    return (
        <table className="ys-table">
            <thead>{renderHeaders()}</thead>
            <tbody>{children}</tbody>
        </table>
    )
}

Table.propTypes = {
    headersMap: object
};

Table.defaultProps = {
    headers: {}
};

export default Table;