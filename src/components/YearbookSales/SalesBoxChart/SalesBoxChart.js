import "./salesBoxChart.less"
import * as React from "react";

export default ({campus, online, max}) => {
    const width = 400;
    const bubbleWidth = 28;
    const part = max / width;
    const campusWidth = max ? campus * part : 0;
    const onlineWidth = max ? online * part : 0;
    const leftBubbleMargin = campusWidth + onlineWidth - 2;
    return (
        <div className="chart-content">
            <div className="chart">
                <p className="text-right">{max}</p>
                <span className="chart-vertical-line"/>
                <div className="chart-box-container">
                    <div className="chart-box chart-box-green" style={{width: campusWidth}}/>
                    <div className="chart-box chart-box-yellow" style={{width: onlineWidth}}/>
                </div>
                <span className="chart-vertical-line"/>
            </div>
            <span className="chart-bubble" style={{marginLeft: leftBubbleMargin}}>{campus + online}</span>
        </div>
    )
};