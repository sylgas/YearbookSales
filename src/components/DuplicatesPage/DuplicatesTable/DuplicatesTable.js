import React from "react";
import DuplicateTableRow from "./DuplicateTableRow/DuplicateTableRow";
import {arrayOf, func, number, object} from "prop-types";
import "./duplicatesTable.less";
import {EXTENDED_DUPLICATES_TABLE_HEADERS} from "../../../constants/duplicatesHeaders";
import * as duplicatesHelper from "../../../utils/duplicates";
import Table from "../../Common/Table/Table";
import SelectableTableCreator from "../../Composable/SelectableTableCreator/SelectableTableCreator";
import ButtonsBar from "../../Common/ButtonsBar/ButtonsBar";


class DuplicatesTable extends React.Component {

    static propTypes = {
        duplicates: object.isRequired,
        handleTableCellSelected: func.isRequired,
        selected: arrayOf(number),
        actions: object.isRequired,
    };

    static defaultProps = {
        selected: []
    };

    constructor(props) {
        super(props);
        this.state = {
            omitted: []
        }
    }

    mergeDuplicates = () => {
        const {duplicates, selected, actions} = this.props;
        const mergedItem = duplicatesHelper.buildMergedItem(duplicates.data, selected);
        const includedDuplicates = duplicates.data.filter((duplicate, index) => !this.state.omitted[index]);
        actions.mergeDuplicates(duplicates.id, duplicatesHelper.getDuplicatesIds(includedDuplicates), mergedItem);
    };

    ignoreDuplicates = () => {
        const {duplicates, actions} = this.props;
        actions.ignoreDuplicates(duplicates.id, duplicatesHelper.getDuplicatesIds(duplicates.data))
    };

    onIncludeChange = (row) => {
        const omitted = [...this.state.omitted];
        omitted[row] = !omitted[row];
        this.setState({omitted});
    };

    renderDuplicatesTableRows = () => {
        const {duplicates, handleTableCellSelected, selected} = this.props;
        return duplicates.data.map((duplicate, index) => (
            <DuplicateTableRow key={duplicate.studentId} row={index} duplicate={duplicate}
                               onTableCellClick={handleTableCellSelected} selected={selected}
                               onIncludeChange={this.onIncludeChange}
                               isIncluded={!this.state.omitted[index]}/>
        ))
    };

    render() {
        const {duplicates, selected} = this.props;
        const buttonsProps = {
            positive: {
                disabled: !duplicatesHelper.areAllFieldsSelected(selected, duplicates.data),
                label: "Merge",
                onClick: this.mergeDuplicates
            },
            negative: {
                label: "Ignore",
                onClick: this.ignoreDuplicates
            }
        };
        const loaderProps = {
            isLoading: duplicates.isMerging || duplicates.isIgnoring,
            loadingText: duplicates.isMerging ? "Merging..." : "Ignoring...."
        };
        return (
            <div className="duplicates-table">
                <Table {...loaderProps} headers={EXTENDED_DUPLICATES_TABLE_HEADERS}>
                    {this.renderDuplicatesTableRows()}
                </Table>
                <ButtonsBar {...buttonsProps}/>
            </div>
        );
    }
}

export default SelectableTableCreator(DuplicatesTable);