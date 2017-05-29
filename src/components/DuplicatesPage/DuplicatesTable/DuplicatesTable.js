import * as React from "react";
import DuplicateTableRow from "../DuplicateTableRow/DuplicateTableRow";
import * as PropTypes from "prop-types";
import TableHeader from "../../Common/TableHeader/TableHeader";
import "./duplicatesTable.less";
import PositiveNegativeButtons from "../../Common/ButtonsBar/ButtonsBar";
import {DUPLICATES_TABLE_HEADERS} from "../../../constants/duplicatesHeaders";

const canBeMerged = (selected) => {
    for (let i = 0; i < DUPLICATES_TABLE_HEADERS.length - 1; i++) {
        if (selected[i] === undefined) {
            return false;
        }
    }
    return true;
};

const getDuplicateTitle = (duplicate) => (duplicate.firstName + ' ' + duplicate.lastName).toUpperCase();

const DuplicatesTable = ({index, duplicates, selected, handleTableCellSelected}) => (
    <div className="ys-duplicates-table-container">
        <b className="secondary-text">DUPLICATE {index + 1} - {getDuplicateTitle(duplicates[0])}</b>
        <table className="ys-table ys-duplicates-table">
            <thead>
            <TableHeader headers={DUPLICATES_TABLE_HEADERS}/>
            </thead>
            <tbody>
            {duplicates.map((duplicate, index) => (
                <DuplicateTableRow key={duplicate.studentId} row={index} duplicate={duplicate}
                                   onTableCellClick={handleTableCellSelected} selected={selected}/>
            ))}
            </tbody>
        </table>
        <PositiveNegativeButtons positive={{disabled: !canBeMerged(selected), label: "Merge"}}
                                 negative={{label: "Ignore"}}/>
    </div>
);

DuplicatesTable.propTypes = {
    duplicates: PropTypes.array.isRequired,
    handleTableCellSelected: PropTypes.func,
    selected: PropTypes.arrayOf(PropTypes.number)
};

export default DuplicatesTable;