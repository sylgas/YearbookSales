import React from "react";
import DuplicatesList from "./DuplicatesList";

class DuplicatesPage extends React.Component {

    componentWillMount() {
        this.props.actions.fetchDuplicates();
    }

    render() {
        return (
            <div className="duplicates-page">
                <DuplicatesList/>
            </div>
        )
    };
}

export default DuplicatesPage;