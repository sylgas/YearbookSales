import * as PropTypes from "prop-types";
import * as React from "react";
import "./selectableTableCell.less";
import classNames from "classnames";

class SelectableTableCell extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (this.props.isEnabled) {
            this.props.onClick(this.props.position)
        }
    }

    componentDidUpdate() {
        this.deselectCellIfDisabled();
    }

    deselectCellIfDisabled() {
        if (!this.props.isEnabled && this.props.isSelected) {
            const position = [this.props.position[0]];
            this.props.onClick(position);
        }
    }

    render() {
        const cellClassNames = classNames({
            'selectable-table-cell': true,
            'selected': this.props.isSelected,
            'selectable': this.props.isEnabled && !this.props.isSelected,
        });
        return (
            <td className={cellClassNames} onClick={this.onClick}>{this.props.value}</td>
        );
    }
}

SelectableTableCell.propTypes = {
    isEnabled: PropTypes.bool,
    isSelected: PropTypes.bool,
    position: PropTypes.arrayOf(PropTypes.number),
    onClick: PropTypes.func,
    value: PropTypes.any
};

export default SelectableTableCell;