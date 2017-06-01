import React from "react";
import "./buttonsFooter.less";
import PropTypes from "prop-types";

const ButtonsFooter = ({leftButton, rightButton}) => (
    <div className="buttons-footer text-right">
        <button className="btn footer-button">{leftButton}</button>
        <button className="btn footer-button">{rightButton}</button>
    </div>
);

ButtonsFooter.propTypes = {
    leftButton: PropTypes.string.isRequired,
    rightButton: PropTypes.string.isRequired
};

export default ButtonsFooter;