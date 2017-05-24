import React from "react";
import "./common.less";
import PropTypes from "prop-types";

const Spinner = ({isLoading}) => {
    if (!isLoading) {
        return <div/>;
    }

    return (
        <div className="spinner">
            <i className="fa fa-spinner fa-spin fa-4x fa-fw"/>
        </div>
    );
};

Spinner.propTypes = {
    isLoading: PropTypes.bool
};

export default Spinner;