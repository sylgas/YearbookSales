import React from "react";

const SelectableTableCreator = (Component) => (
    class SortableTable extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selected: []
            }
        }

        handleTableCellSelected = ([column, row]) => {
            const selected = [...this.state.selected];
            selected[column] = row;
            this.setState({selected});
        };

        render() {
            return (
                <Component {...this.props} handleTableCellSelected={this.handleTableCellSelected}
                           selected={this.state.selected}/>
            )
        }
    }
);

export default SelectableTableCreator;