import React from "react";

const SelectableTableCreator = (Component) => (
    class SortableTable extends React.Component {
        constructor(props) {
            super(props);
            this.handleTableCellSelected = this.handleTableCellSelected.bind(this);
        }

        handleTableCellSelected([column, row]) {
            console.log('Table cell selected: ' + column + ', ' + row)
        }

        render() {
            return (
                <Component {...this.props} handleTableCellSelected={this.handleTableCellSelected}/>
            )
        }
    }
);

export default SelectableTableCreator;