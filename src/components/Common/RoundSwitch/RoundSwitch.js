import React from "react";
import "./roundSwitch.less";
import {bool, func} from "prop-types";

function RoundSwitch({isChecked, onChange}) {
    return (
        <label className="round-switch">
            <input type="checkbox" checked={isChecked} onChange={onChange}/>
            <div className="round-slider round"/>
        </label>
    )
}

RoundSwitch.propTypes = {
    onChange: func,
    isChecked: bool
};

RoundSwitch.defaultProps = {
    isChecked: false
};

export default RoundSwitch;