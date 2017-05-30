import SelectableTableCell from "../../../Common/SelectableTableCell/SelectableTableCell";
import * as React from "react";
import * as PropTypes from "prop-types";
import "./duplicateTableRow.less";
import RoundSwitch from "../../../Common/RoundSwitch/RoundSwitch";
import classNames from "classnames";
import _ from "lodash";

class DuplicateTableRow extends React.Component {

    constructor(props) {
        super(props);
        this.onIncludeChange = this.onIncludeChange.bind(this);
    }

    onIncludeChange() {
        this.props.onIncludeChange(this.props.row);
    }

    render() {
        const {row, duplicate, selected, onTableCellClick, isIncluded} = this.props;
        return (
            <tr className={classNames({"duplicate-table-row": true, "omitted": !isIncluded})}>
                {_.values(duplicate).map((value, column) => (
                    <SelectableTableCell key={"key-" + column} position={[column, row]} onClick={onTableCellClick}
                                         value={value} isSelected={selected && selected[column] === row}
                                         isEnabled={isIncluded}/>
                ))}
                <td><RoundSwitch onChange={this.onIncludeChange} isChecked={isIncluded}/></td>
            </tr>
        );
    }
}

DuplicateTableRow.propTypes = {
    isIncluded: PropTypes.bool,
    onIncludeChange: PropTypes.func,
    row: PropTypes.number,
    duplicate: PropTypes.object,
    onTableCellClick: PropTypes.func,
    selected: PropTypes.arrayOf(PropTypes.number),
};

export default DuplicateTableRow;