import {any, arrayOf, bool, func, number} from "prop-types";
import React from "react";
import "./selectableTableCell.less";
import classNames from "classnames";

class SelectableTableCell extends React.PureComponent {

    static propTypes = {
        position: arrayOf(number).isRequired,
        onClick: func.isRequired,
        isEnabled: bool,
        isSelected: bool,
        value: any
    };

    static defaultProps = {
        isEnabled: true,
        isSelected: false,
        value: ''
    };

    componentDidUpdate() {
        this.deselectCellIfDisabled();
    }

    deselectCellIfDisabled() {
        if (!this.props.isEnabled && this.props.isSelected) {
            const position = [this.props.position[0]];
            this.props.onClick(position);
        }
    }

    handleClick = () => {
        if (this.props.isEnabled) {
            this.props.onClick(this.props.position)
        }
    };

    render() {
        const cellClassNames = classNames({
            'selectable-table-cell': true,
            'selected': this.props.isSelected,
            'selectable': this.props.isEnabled && !this.props.isSelected,
        });
        return (
            <td className={cellClassNames} onClick={this.handleClick}>{this.props.value}</td>
        );
    }
}

export default SelectableTableCell;