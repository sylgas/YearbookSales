import React from "react";
import DuplicatesTable from "./DuplicatesTable";
import Spinner from "../Common/Spinner/Spinner";

class DuplicatesPage extends React.Component {

    componentWillMount() {
        this.props.actions.fetchDuplicates();
    }

    render() {
        const {duplicatesSets} = this.props;

        return (
            <div className="col-md-12 duplicates-page">
                <Spinner isLoading={this.props.isLoading}/>
                <h2>{duplicatesSets.length} Duplicates Found</h2>
                {duplicatesSets.map((duplicatesSet, index) => (
                    <DuplicatesTable key={"key-" + index} index={index} duplicates={duplicatesSet}/>
                ))}
            </div>
        )
    };
}

export default DuplicatesPage;