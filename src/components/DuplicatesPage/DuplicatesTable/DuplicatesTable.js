import * as React from "react";
import DuplicateTableRow from "../DuplicateTableRow/DuplicateTableRow";
import * as PropTypes from "prop-types";
import TableHeader from "../../Common/TableHeader/TableHeader";
import "./duplicatesTable.less";
import PositiveNegativeButtons from "../../Common/ButtonsBar/ButtonsBar";
import {DUPLICATES_TABLE_HEADERS} from "../../../constants/duplicatesHeaders";
import Spinner from "../../Common/Spinner/Spinner";
import {areAllFieldsSelected} from "../../../utils/duplicates";

const getDuplicateTitle = (duplicate) => (duplicate.firstName + ' ' + duplicate.lastName).toUpperCase();

class DuplicatesTable extends React.Component {

    constructor(props) {
        super(props);
        this.mergeDuplicates = this.mergeDuplicates.bind(this);
        this.state = {
            isMerging: false
        }
    }

    mergeDuplicates() {
        this.setState({isMerging: true});
        const {duplicates, selected, clearSelected, mergeDuplicates} = this.props;
        mergeDuplicates(duplicates, selected);
        clearSelected();
    }

    render() {
        const {index, duplicates, selected, handleTableCellSelected} = this.props;
        return (
            <div className="ys-duplicates-table-container">
                <Spinner isLoading={this.state.isMerging}/>
                <b className="secondary-text">DUPLICATE {index + 1} - {getDuplicateTitle(duplicates[0])}</b>
                <table className="ys-table ys-duplicates-table">
                    <thead>
                    <TableHeader headers={DUPLICATES_TABLE_HEADERS}/>
                    </thead>
                    <tbody>
                    {duplicates.map((duplicate, index) => (
                        <DuplicateTableRow key={duplicate.studentId} row={index} duplicate={duplicate}
                                           onTableCellClick={handleTableCellSelected} selected={selected}/>
                    ))}
                    </tbody>
                </table>
                <PositiveNegativeButtons positive={{
                    disabled: !areAllFieldsSelected(selected),
                    label: "Merge",
                    onClick: this.mergeDuplicates
                }}
                                         negative={{label: "Ignore"}}/>
            </div>
        );
    }
}

DuplicatesTable.propTypes = {
    index: PropTypes.number,
    duplicates: PropTypes.array.isRequired,
    handleTableCellSelected: PropTypes.func,
    selected: PropTypes.arrayOf(PropTypes.number),
    mergeDuplicates: PropTypes.func
};

export default DuplicatesTable;