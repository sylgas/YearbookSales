import React from "react";
import DeadlineItem from "../DeadlineItem/DeadlineItem";
import PropTypes from "prop-types";

class ProgressBox extends React.Component {

    componentDidMount() {
        this.props.actions.fetchDeadlines();
    }

    calculateSubmittedPages() {
        if (!this.props.deadlines.length) {
            return {
                submitted: 0,
                pages: 0
            }
        }
        return this.props.deadlines.reduce((d1, d2) => {
            return {
                submitted: d1.submitted + d2.submitted,
                pages: d1.pages + d2.pages
            }
        });
    };

    render() {
        const {submitted, pages} = this.calculateSubmittedPages();
        const progress = pages ? submitted / pages * 100 : 0;

        return (
            <div className="box">
                <div className="box-header box-section yearbook-progress-header">
                    <div className={"progress-bar-trophy" + (progress === 100 ? " progress-bar-trophy-success" : "")}>
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
                    {!this.props.deadlines.length || this.props.deadlines.map((deadline, index) => (
                        <div key={index} className="box-section">
                            <DeadlineItem index={index} {...deadline}/>
                        </div>
                    ))}
                    {!this.props.deadlines.length && (
                        <div className="box-section">
                            No deadlines scheduled
                        </div>
                    )}
                </div>
            </div>
        )
    }

}

ProgressBox.propTypes = {
    deadlines: PropTypes.array
};

export default ProgressBox;