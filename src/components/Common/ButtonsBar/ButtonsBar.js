import React from "react";
import {object} from "prop-types";
import "./buttonsBar.less";

function ButtonsBar({positive, negative}) {
    const loader = <i className='fa fa-spinner fa-spin'></i>
    return (
        <div className="buttons-bar">
            <button className="bar-button bar-button-positive" disabled={positive.disabled}
                    onClick={positive.onClick}>{positive.isLoading ? loader : positive.label}</button>
            <button className="bar-button bar-button-negative"
                    onClick={negative.onClick}>{negative.isLoading ? loader : negative.label}</button>
        </div>
    )
}

ButtonsBar.propTypes = {
    positive: object.isRequired,
    negative: object.isRequired
};

export default ButtonsBar;