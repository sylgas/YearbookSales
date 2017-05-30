import React from "react";
import DuplicatesTable from "./DuplicatesTable";
import Spinner from "../Common/Spinner/Spinner";

class DuplicatesPage extends React.Component {

    componentWillMount() {
        this.props.actions.fetchDuplicates();
    }

    render() {
        const {duplicatesSets, actions} = this.props;

        return (
            <div className="col-md-12 duplicates-page">
                <Spinner isLoading={this.props.isLoading}/>
                <h2>{duplicatesSets.length} Duplicates Found</h2>
                {duplicatesSets.map((duplicatesSet, index) => (
                    <DuplicatesTable key={duplicatesSet[0].studentId} index={index} duplicates={duplicatesSet}
                                     mergeDuplicates={actions.mergeDuplicates}/>
                ))}
            </div>
        )
    };
}

export default DuplicatesPage;