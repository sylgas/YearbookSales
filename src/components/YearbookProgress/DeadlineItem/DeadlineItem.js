import * as React from "react";
import "./deadlineItem.less";

export default ({index, date, submitted, pages}) => {
    const days = 10;

    return (
        <div className="deadline clearfix">
            <div className="pull-left">
                <div>Page Submission Deadline {index} - {date}</div>
                <div>Submitted: <span className="submitted-text">{submitted}</span>
                    <span className="secondary-text"> / {pages} pages</span></div>
            </div>
            <div className="pull-right secondary-text">
                {days} {days === 1 ? "day" : "days"} left
            </div>
        </div>
    )
};
