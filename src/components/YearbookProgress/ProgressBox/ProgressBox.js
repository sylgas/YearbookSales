import React from "react";
import DeadlineItem from "../DeadlineItem/DeadlineItem";

class ProgressBox extends React.Component {

    render() {
        const deadlines = [
            {
                dueDate: new Date(2016, 9, 23),
                submitted: 16,
                pages: 20
            },
            {
                dueDate: new Date(2016, 11, 13),
                submitted: 0,
                pages: 20
            },
            {
                dueDate: new Date(2017, 2, 2),
                submitted: 0,
                pages: 20
            }, {
                dueDate: new Date(2017, 4, 1),
                submitted: 0,
                pages: 20
            },
        ];

        return (
            <div className="box">
                <div className="box-header yearbook-progress-header">
                    <div className="progress-bar-trophy">
                        <span><i className="fa fa-trophy fa-fw"/></span>
                    </div>
                    <div className="clearfix">
                        <h2>Yearbook Progress
                            <small>20% total completion</small>
                        </h2>
                    </div>
                    <div className="progress-bar-container">
                        <div className="progress-bar-background">
                            <div className="progress-bar" style={{width: '20%'}}/>
                        </div>
                    </div>
                </div>
                {deadlines.map((deadline, index) => (
                    <div key={index} className="box-header">
                        <DeadlineItem {...deadline}/>
                    </div>
                ))}
            </div>
        )
    }

}

export default ProgressBox;