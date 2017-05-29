import React from "react";
import DuplicatesTable from "./DuplicatesTable";

class DuplicatesPage extends React.Component {

    componentWillMount() {
        this.props.actions.fetchDuplicates();
    }

    render() {
        const {duplicatesSets} = this.props;

        return (
            <div className="col-md-12">
                {duplicatesSets.map((duplicatesSet, index) => (
                    <DuplicatesTable key={"key-" + index} duplicates={duplicatesSet}/>
                ))}
            </div>
        )
    };
}

export default DuplicatesPage;