import React from "react";
import DuplicatesList from "./DuplicatesList";
import NavbarPage from "../Common/NavbarPage/NavbarPage";

class DuplicatesPage extends React.Component {

    componentDidMount() {
        this.props.actions.fetchDuplicates();
    }

    render() {
        return (
            <NavbarPage>
                <DuplicatesList/>
            </NavbarPage>
        )
    };
}

export default DuplicatesPage;