import * as React from "react";
import "./deadlineItem.less";
import {daysSinceNow, formatDateWithMonthNames} from "../../../utils/date";
import PropTypes from "prop-types";

const DeadlineItem = ({index, dueDate, submitted, pages}) => {
    const days = daysSinceNow(dueDate);

    return (
        <div className="deadline clearfix">
            <div className="pull-left">
                <div>Page Submission Deadline {index + 1} - {formatDateWithMonthNames(dueDate)}</div>
                <div>Submitted: <span className="submitted-text">{submitted}</span>
                    <span className="secondary-text"> / {pages} pages</span></div>
            </div>
            <div className="pull-right secondary-text">
                {days} {days === 1 ? "day" : "days"} left
            </div>
        </div>
    )
};

DeadlineItem.propTypes = {
    index: PropTypes.number.isRequired,
    dueDate: PropTypes.instanceOf(Date).isRequired,
    submitted: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired
};

export default DeadlineItem;
