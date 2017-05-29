import * as React from "react";
import * as PropTypes from "prop-types";
import "./buttonsBar.less";

const PositiveNegativeButtons = ({positive, negative}) => (
    <div className="buttons-bar">
        <button className="bar-button bar-button-positive" disabled={positive.disabled}
                onClick={positive.onClick}>{positive.label}</button>
        <button className="bar-button bar-button-negative" onClick={negative.onClick}>{negative.label}</button>
    </div>
);

PositiveNegativeButtons.propTypes = {
    positive: PropTypes.object,
    negative: PropTypes.object
};

export default PositiveNegativeButtons;