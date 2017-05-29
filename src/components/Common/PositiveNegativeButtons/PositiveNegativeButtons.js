import * as React from "react";
import * as PropTypes from "prop-types";

const PositiveNegativeButtons = ({isPositiveEnabled, positiveLabel, negativeLabel}) => (
    <div>
        <button className="btn btn-primary" disabled={!isPositiveEnabled}>{positiveLabel}</button>
        <button className="btn btn-link">{negativeLabel}</button>
    </div>
);

PositiveNegativeButtons.propTypes = {
    isPositiveEnabled: PropTypes.bool,
    positiveLabel: PropTypes.string,
    negativeLabel: PropTypes.string
};

export default PositiveNegativeButtons;