import React from "react";
import "./roundSwitch.less";
import {bool, func} from "prop-types";

function RoundSwitch(props) {
    return (
        <label className="round-switch">
            <input type="checkbox" {...props}/>
            <div className="round-slider round"/>
        </label>
    )
}

RoundSwitch.propTypes = {
    onChange: func,
    checked: bool
};

RoundSwitch.defaultProps = {
    checked: false
};

export default RoundSwitch;