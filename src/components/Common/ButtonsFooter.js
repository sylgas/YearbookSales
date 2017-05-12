import React from 'react';
import './common.less'

export default ({leftButton, rightButton}) => (
    <div className="buttons-footer text-right">
        <button className="btn footer-button">{leftButton}</button>
        <button className="btn footer-button">{rightButton}</button>
    </div>
);