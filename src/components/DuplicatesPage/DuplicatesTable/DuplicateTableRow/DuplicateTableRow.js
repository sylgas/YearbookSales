import SelectableTableCell from "../../../Common/SelectableTableCell/SelectableTableCell";
import React from "react";
import {arrayOf, bool, func, number, object} from "prop-types";
import "./duplicateTableRow.less";
import RoundSwitch from "../../../Common/RoundSwitch/RoundSwitch";
import classNames from "classnames";
import _ from "lodash";

class DuplicateTableRow extends React.PureComponent {

    static propTypes = {
        duplicate: object.isRequired,
        row: number.isRequired,
        selected: arrayOf(number),
        isIncluded: bool,
        onIncludeChange: func,
        onTableCellClick: func,
    };

    static defaultProps = {
        selected: [],
        isIncluded: true
    };

    onIncludeChange = () => {
        this.props.onIncludeChange(this.props.row);
    };

    renderSelectableTableCells = () => {
        const {row, duplicate, selected, onTableCellClick, isIncluded} = this.props;
        return _.values(duplicate).map((value, column) => (
            <SelectableTableCell key={"key-" + column} position={[column, row]} onClick={onTableCellClick}
                                 value={value} isSelected={selected[column] === row} isEnabled={isIncluded}/>
        ))
    };

    render() {
        const {isIncluded} = this.props;
        return (
            <tr className={classNames({"duplicate-table-row": true, "omitted": !isIncluded})}>
                {this.renderSelectableTableCells()}
                <td><RoundSwitch onChange={this.onIncludeChange} isChecked={isIncluded}/></td>
            </tr>
        );
    }
}

export default DuplicateTableRow;