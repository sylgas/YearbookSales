import * as React from "react";
import DuplicateTableRow from "./DuplicateTableRow/DuplicateTableRow";
import * as PropTypes from "prop-types";
import "./duplicatesTable.less";
import PositiveNegativeButtons from "../../Common/ButtonsBar/ButtonsBar";
import {EXTENDED_DUPLICATES_TABLE_HEADERS} from "../../../constants/duplicatesHeaders";
import {areAllFieldsSelected} from "../../../utils/duplicates";
import Table from "../../Common/Table/Table";
import SelectableTableCreator from "../../Composable/SelectableTableCreator/SelectableTableCreator";


class DuplicatesTable extends React.Component {

    constructor(props) {
        super(props);
        this.mergeDuplicates = this.mergeDuplicates.bind(this);
    }

    mergeDuplicates() {
        const {duplicates, selected, mergeDuplicates} = this.props;
        mergeDuplicates(duplicates.id, duplicates.data, selected);
    }

    render() {
        const {duplicates, handleTableCellSelected, selected} = this.props;
        return (
            <div className="duplicates-table">
                <Table isLoading={duplicates.isMerging} headers={EXTENDED_DUPLICATES_TABLE_HEADERS}>
                    {duplicates.data.map((duplicate, index) => (
                        <DuplicateTableRow key={duplicate.studentId} row={index} duplicate={duplicate}
                                           onTableCellClick={handleTableCellSelected} selected={selected}/>
                    ))}
                </Table>
                <PositiveNegativeButtons positive={{
                    disabled: !areAllFieldsSelected(selected),
                    label: "Merge",
                    onClick: this.mergeDuplicates
                }}
                                         negative={{label: "Ignore"}}/>
            </div>
        );
    }
}

DuplicatesTable.propTypes = {
    duplicates: PropTypes.object.isRequired,
    handleTableCellSelected: PropTypes.func,
    selected: PropTypes.arrayOf(PropTypes.number),
    mergeDuplicates: PropTypes.func,
};

export default SelectableTableCreator(DuplicatesTable);