import React from "react";
import DuplicateTableRow from "./DuplicateTableRow/DuplicateTableRow";
import {arrayOf, func, number, object} from "prop-types";
import "./duplicatesTable.less";
import {EXTENDED_DUPLICATES_TABLE_HEADERS} from "../../../constants/duplicatesHeaders";
import * as duplicatesHelper from "../../../utils/duplicates";
import Table from "../../Common/Table/Table";
import SelectableTableCreator from "../../Composable/SelectableTableCreator/SelectableTableCreator";
import ButtonsBar from "../../Common/ButtonsBar/ButtonsBar";
import classNames from "classnames";

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

    createTableRowProps = (duplicate, index) => {
        const {duplicates, handleTableCellSelected, selected} = this.props;

        const rowProps = {
            row: index,
            duplicate: duplicate,
            onTableCellClick: handleTableCellSelected,
            onIncludeChange: this.onIncludeChange
        };

        return duplicates.isIgnoring ? rowProps : {
            ...rowProps,
            isIncluded: !this.state.omitted[index],
            selected: selected
        }
    };

    renderDuplicatesTableRows = () => {
        return this.props.duplicates.data.map((duplicate, index) => (
            <DuplicateTableRow key={duplicate.studentId} {...this.createTableRowProps(duplicate, index)}/>
        ))
    };

    render() {
        const {duplicates, selected} = this.props;
        const isLoading = duplicates.isIgnoring || duplicates.isMerging;

        const buttonsProps = {
            positive: {
                disabled: !duplicatesHelper.areAllFieldsSelected(selected, duplicates.data),
                isLoading: duplicates.isMerging,
                label: "Merge",
                onClick: this.mergeDuplicates
            },
            negative: {
                label: "Ignore",
                isLoading: duplicates.isIgnoring,
                onClick: this.ignoreDuplicates
            }
        };
        return (
            <div className={classNames({"duplicates-table": true, " readonly": isLoading})}>
                <Table headersMap={{header: EXTENDED_DUPLICATES_TABLE_HEADERS}}>
                    {this.renderDuplicatesTableRows()}
                </Table>
                <ButtonsBar {...buttonsProps}/>
            </div>
        );
    }
}

export default SelectableTableCreator(DuplicatesTable);