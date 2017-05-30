import React from "react";

const SelectableTableCreator = (Component) => (
    class SortableTable extends React.Component {
        constructor(props) {
            super(props);
            this.handleTableCellSelected = this.handleTableCellSelected.bind(this);
            this.clearSelected = this.clearSelected.bind(this);
            this.state = {
                selected: []
            }
        }

        handleTableCellSelected([column, row]) {
            const selected = [...this.state.selected];
            selected[column] = row;
            this.setState({selected});
        }

        clearSelected() {
            this.setState({selected: []});
        }

        render() {
            return (
                <Component {...this.props} handleTableCellSelected={this.handleTableCellSelected}
                           clearSelected={this.clearSelected}
                           selected={this.state.selected}/>
            )
        }
    }
);

export default SelectableTableCreator;