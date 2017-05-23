import React from "react";
import DeadlineItem from "../DeadlineItem/DeadlineItem";

class ProgressBox extends React.Component {

    render() {
        const deadlines = [
            {
                dueDate: new Date(2017, 9, 23),
                submitted: 16,
                pages: 20
            },
            {
                dueDate: new Date(2017, 11, 13),
                submitted: 0,
                pages: 20
            },
            {
                dueDate: new Date(2018, 2, 2),
                submitted: 20,
                pages: 20
            }, {
                dueDate: new Date(2018, 4, 1),
                submitted: 0,
                pages: 20
            },
        ];

        const {submitted, pages} = deadlines.reduce((d1, d2) => {
            return {
                submitted: d1.submitted + d2.submitted,
                pages: d1.pages + d2.pages
            }
        });

        const progress = submitted / pages * 100;

        return (
            <div className="box">
                <div className="box-header box-section yearbook-progress-header">
                    <div className="progress-bar-trophy">
                        <span><i className="fa fa-trophy fa-fw"/></span>
                    </div>
                    <div className="clearfix">
                        <h2>Yearbook Progress
                            <small>{progress}% total completion</small>
                        </h2>
                    </div>
                    <div className="progress-bar-container">
                        <div className="progress-bar-background">
                            <div className="progress-bar" style={{width: (progress + '%')}}/>
                        </div>
                    </div>
                </div>
                <div className="box-content">
                    {deadlines.map((deadline, index) => (
                        <div key={index} className="box-section">
                            <DeadlineItem {...deadline}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}

export default ProgressBox;