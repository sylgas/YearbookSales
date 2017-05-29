import * as React from "react";
import "./roundSwitch.less";
import * as PropTypes from "prop-types";

const RoundSwitch = ({isChecked, onChange}) => (
    <label className="round-switch">
        <input type="checkbox" checked={isChecked} onChange={onChange}/>
        <div className="round-slider round"/>
    </label>
);

RoundSwitch.propTypes = {
    onChange: PropTypes.func,
    isChecked: PropTypes.bool
};

export default RoundSwitch;