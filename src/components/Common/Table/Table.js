import * as React from "react";
import TableHeader from "../TableHeader/TableHeader";
import * as PropTypes from "prop-types";
import "./table.less";
import LoadableComponentCreator from "../../Composable/LoadableComponentCreator/LoadableComponentCreator";

const Table = ({headers, children}) => (
    <table className="ys-table">
        <thead><TableHeader headers={headers}/></thead>
        <tbody>{children}</tbody>
    </table>
);

Table.propTypes = {
    headers: PropTypes.array
};

export default LoadableComponentCreator(Table);