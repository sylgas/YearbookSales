import React from "react";
import "./common.less";
import PropTypes from "prop-types";

const Spinner = ({isLoading}) => (
    <div>
        {isLoading && (
            <div className="spinner">
                <i className="fa fa-spinner fa-spin fa-4x fa-fw"/>
            </div>
        )}
    </div>
);

Spinner.propTypes = {
    isLoading: PropTypes.bool
};

export default Spinner;