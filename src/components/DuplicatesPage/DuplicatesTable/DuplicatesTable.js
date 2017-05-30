import * as React from "react";
import DuplicateTableRow from "./DuplicateTableRow/DuplicateTableRow";
import * as PropTypes from "prop-types";
import "./duplicatesTable.less";
import PositiveNegativeButtons from "../../Common/ButtonsBar/ButtonsBar";
import {EXTENDED_DUPLICATES_TABLE_HEADERS} from "../../../constants/duplicatesHeaders";
import {areAllFieldsSelected, buildMergedItem, getDuplicatesIds} from "../../../utils/duplicates";
import Table from "../../Common/Table/Table";
import SelectableTableCreator from "../../Composable/SelectableTableCreator/SelectableTableCreator";


class DuplicatesTable extends React.Component {

    constructor(props) {
        super(props);
        this.mergeDuplicates = this.mergeDuplicates.bind(this);
        this.onIncludeChange = this.onIncludeChange.bind(this);

        this.state = {
            omitted: []
        }
    }

    mergeDuplicates() {
        const {duplicates, selected, mergeDuplicates} = this.props;
        const mergedItem = buildMergedItem(duplicates.data, selected);
        const usedIds = getDuplicatesIds(duplicates.data, this.state.omitted);
        mergeDuplicates(duplicates.id, usedIds, mergedItem);
    }

    onIncludeChange(row) {
        const omitted = [...this.state.omitted];
        omitted[row] = !omitted[row];
        this.setState({omitted});
    }

    render() {
        const {duplicates, handleTableCellSelected, selected} = this.props;
        const buttonsProps = {
            positive: {
                disabled: !areAllFieldsSelected(selected),
                label: "Merge",
                onClick: this.mergeDuplicates
            },
            negative: {label: "Ignore"}
        };
        return (
            <div className="duplicates-table">
                <Table isLoading={duplicates.isMerging} headers={EXTENDED_DUPLICATES_TABLE_HEADERS}>
                    {duplicates.data.map((duplicate, index) => (
                        <DuplicateTableRow key={duplicate.studentId} row={index} duplicate={duplicate}
                                           onTableCellClick={handleTableCellSelected} selected={selected}
                                           onIncludeChange={this.onIncludeChange}
                                           isIncluded={!this.state.omitted[index]}/>
                    ))}
                </Table>
                <PositiveNegativeButtons {...buttonsProps}/>
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