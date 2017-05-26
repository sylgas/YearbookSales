import * as PropTypes from "prop-types";
import * as React from "react";

class SelectableTableCell extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick(this.props.position)
    }

    render() {
        return (
            <td onClick={this.onClick}>{this.props.value}</td>
        );
    }
}

SelectableTableCell.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number),
    onClick: PropTypes.func,
    value: PropTypes.any
};

export default SelectableTableCell;