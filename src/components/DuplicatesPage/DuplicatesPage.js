import React from "react";

class DuplicatesPage extends React.Component {

    componentWillMount() {
        this.props.actions.fetchDuplicates();
    }

    render() {
        const {duplicates} = this.props;
        return (
            <h2>
                {duplicates.length}
            </h2>
        );
    }
}

export default DuplicatesPage;