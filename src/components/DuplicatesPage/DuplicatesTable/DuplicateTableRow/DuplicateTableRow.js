import SelectableTableCell from "../../../Common/SelectableTableCell/SelectableTableCell";
import * as React from "react";
import * as PropTypes from "prop-types";
import "./duplicateTableRow.less";
import RoundSwitch from "../../../Common/RoundSwitch/RoundSwitch";
import classNames from "classnames";

class DuplicateTableRow extends React.Component {

    constructor(props) {
        super(props);
        this.onIncludeChange = this.onIncludeChange.bind(this);
        this.state = {included: true};
    }

    onIncludeChange() {
        this.setState({included: !this.state.included});
    }

    render() {
        const {row, duplicate, selected, onTableCellClick} = this.props;
        const included = this.state.included;
        return (
            <tr className={classNames({"duplicate-table-row": true, "omitted": !included})}>
                {Object.values(duplicate).map((value, column) => (
                    <SelectableTableCell key={"key-" + column} position={[column, row]} onClick={onTableCellClick}
                                         value={value} isSelected={selected && selected[column] === row}
                                         isEnabled={this.state.included}/>
                ))}
                <td><RoundSwitch onChange={this.onIncludeChange} isChecked={included}/></td>
            </tr>
        );
    }
}

DuplicateTableRow.propTypes = {
    row: PropTypes.number,
    duplicate: PropTypes.object,
    onTableCellClick: PropTypes.func,
    selected: PropTypes.arrayOf(PropTypes.number),
};

export default DuplicateTableRow;