import "./salesBoxChart.less";
import * as React from "react";
import sizeMe from "react-sizeme";
import Bubble from "../../Common/Bubble";

const MARGIN_WIDTH = 13; // vertical line (3px) + padding (10px)

const SalesBoxChart = ({max, campus, online, size}) => {
    const width = size.width - 2 * MARGIN_WIDTH;
    const part = width / max;
    const campusWidth = max ? campus * part : 0;
    const onlineWidth = max ? online * part : 0;
    const leftBubbleMargin = campusWidth + onlineWidth + MARGIN_WIDTH;
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
            <div className="chart-bubble">
                <Bubble leftBubbleMargin={leftBubbleMargin} text={campus + online}/>
            </div>
        </div>
    )
};

export default sizeMe({monitorWidth: true})(SalesBoxChart);