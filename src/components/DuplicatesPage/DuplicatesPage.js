import React from "react";
import DuplicatesTable from "./DuplicatesTable";

class DuplicatesPage extends React.Component {

    componentWillMount() {
        this.props.actions.fetchDuplicates();
    }

    render() {
        const {duplicatesSets} = this.props;

        return (
            <div>
                {duplicatesSets.map((duplicatesSet, index) => (
                    <DuplicatesTable key={index} duplicates={duplicatesSet}/>
                ))}
            </div>
        )
    };
}

export default DuplicatesPage;