import * as React from "react";
import {object} from "prop-types";
import "./buttonsBar.less";

function ButtonsBar({positive, negative}) {
    return (
        <div className="buttons-bar">
            <button className="bar-button bar-button-positive" disabled={positive.disabled}
                    onClick={positive.onClick}>{positive.label}</button>
            <button className="bar-button bar-button-negative" onClick={negative.onClick}>{negative.label}</button>
        </div>
    )
}

ButtonsBar.propTypes = {
    positive: object.isRequired,
    negative: object.isRequired
};

export default ButtonsBar;