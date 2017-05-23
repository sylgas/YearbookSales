import * as React from "react";
import "./deadlineItem.less";
import {daysSinceNow, formatDateWithMonthNames} from "../../../utils/date";

export default ({index, dueDate, submitted, pages}) => {
    const days = daysSinceNow(dueDate);

    return (
        <div className="deadline clearfix">
            <div className="pull-left">
                <div>Page Submission Deadline {index} - {formatDateWithMonthNames(dueDate)}</div>
                <div>Submitted: <span className="submitted-text">{submitted}</span>
                    <span className="secondary-text"> / {pages} pages</span></div>
            </div>
            <div className="pull-right secondary-text">
                {days} {days === 1 ? "day" : "days"} left
            </div>
        </div>
    )
};
