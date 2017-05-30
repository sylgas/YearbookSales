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
        this.ignoreDuplicates = this.ignoreDuplicates.bind(this);
        this.onIncludeChange = this.onIncludeChange.bind(this);

        this.state = {
            omitted: []
        }
    }

    mergeDuplicates() {
        const {duplicates, selected, actions} = this.props;
        const mergedItem = buildMergedItem(duplicates.data, selected);
        const includedDuplicates = duplicates.data.filter((duplicate, index) => !this.state.omitted[index]);
        actions.mergeDuplicates(duplicates.id, getDuplicatesIds(includedDuplicates), mergedItem);
    }

    ignoreDuplicates() {
        const {duplicates, actions} = this.props;
        actions.ignoreDuplicates(duplicates.id, getDuplicatesIds(duplicates.data))
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
            negative: {
                label: "Ignore",
                onClick: this.ignoreDuplicates
            }
        };
        return (
            <div className="duplicates-table">
                <Table isLoading={duplicates.isLoading} headers={EXTENDED_DUPLICATES_TABLE_HEADERS}>
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
    actions: PropTypes.object,
};

export default SelectableTableCreator(DuplicatesTable);