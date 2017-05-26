import React from "react";
import "./bubble.less";
import sizeMe from "react-sizeme";
import PropTypes from "prop-types";

const Bubble = ({leftBubbleMargin, text, size}) => {
    const halfWidth = size.width / 2;
    const marginLeft = leftBubbleMargin - halfWidth;
    const dashOutLeftMargin = halfWidth - 5;
    const dashInLeftMargin = dashOutLeftMargin + 1;
    return (
        <div className="bubble" style={{marginLeft}}>
            <div className="bubble-dash bubble-dash-out" style={{marginLeft: dashOutLeftMargin}}/>
            <div className="bubble-dash bubble-dash-in" style={{marginLeft: dashInLeftMargin}}/>
            <div className="bubble-square">{text}</div>
        </div>
    )
};

Bubble.propTypes = {
    leftBubbleMargin: PropTypes.number.isRequired,
    text: PropTypes.number.isRequired
};

export default sizeMe({monitorWidth: true})(Bubble);