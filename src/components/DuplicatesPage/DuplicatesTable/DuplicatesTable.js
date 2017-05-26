import * as React from "react";
import DuplicateTableRow from "../DuplicateTableRow/DuplicateTableRow";
import * as PropTypes from "prop-types";

const DuplicatesTable = ({duplicates, handleTableCellSelected}) => (
    <table>
        <tbody>
        {duplicates.map((duplicate, index) => (
            <DuplicateTableRow key={index} row={index} duplicate={duplicate}
                               onTableCellClick={handleTableCellSelected}/>
        ))}
        </tbody>
    </table>
);

DuplicatesTable.propTypes = {
    duplicates: PropTypes.array.isRequired,
    handleTableCellSelected: PropTypes.func
};

export default DuplicatesTable;