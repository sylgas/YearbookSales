import * as React from "react";
import DuplicateTableRow from "../DuplicateTableRow/DuplicateTableRow";
import * as PropTypes from "prop-types";
import TableHeader from "../../Common/TableHeader/TableHeader";
import "./duplicatesTable.less";
import PositiveNegativeButtons from "../../Common/PositiveNegativeButtons/PositiveNegativeButtons";
import {DUPLICATES_TABLE_HEADERS} from "../../../constants/duplicatesHeaders";

const canBeMerged = (selected) => {
    for (let i = 0; i < DUPLICATES_TABLE_HEADERS.length - 1; i++) {
        if (selected[i] === undefined) {
            return false;
        }
    }
    return true;
};

const DuplicatesTable = ({duplicates, selected, handleTableCellSelected}) => (
    <div>
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
        <PositiveNegativeButtons isPositiveEnabled={canBeMerged(selected)} positiveLabel="Merge"
                                 negativeLabel="Ignore"/>
    </div>
);

DuplicatesTable.propTypes = {
    duplicates: PropTypes.array.isRequired,
    handleTableCellSelected: PropTypes.func,
    selected: PropTypes.arrayOf(PropTypes.number)
};

export default DuplicatesTable;