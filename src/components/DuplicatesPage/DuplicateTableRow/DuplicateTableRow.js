import SelectableTableCell from "../../Common/SelectableTableCell/SelectableTableCell";
import * as React from "react";
import * as PropTypes from "prop-types";

const DuplicateTableRow = ({row, duplicate, onTableCellClick, selected}) => (
    <tr key={'key-' + row}>
        {Object.values(duplicate).map((value, column) => (
            <SelectableTableCell key={column} position={[column, row]} onClick={onTableCellClick} value={value}
                                 isSelected={selected && selected[column] === row}/>
        ))}
    </tr>
);

DuplicateTableRow.propTypes = {
    row: PropTypes.number,
    duplicate: PropTypes.object,
    onTableCellClick: PropTypes.func
};

export default DuplicateTableRow;