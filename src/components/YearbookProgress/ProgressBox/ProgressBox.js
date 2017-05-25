import React from "react";
import DeadlineItem from "../DeadlineItem/DeadlineItem";
import PropTypes from "prop-types";

class ProgressBox extends React.Component {

    componentDidMount() {
        this.props.actions.fetchDeadlines();
    }

    render() {
        const {deadlines, totalSubmitted, pages} = this.props;
        const progress = Math.round(pages ? totalSubmitted / pages * 100 : 0);

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
                    {!deadlines.length || deadlines.map((deadline, index) => (
                        <div key={index} className="box-section">
                            <DeadlineItem index={index} {...deadline}/>
                        </div>
                    ))}
                    {!deadlines.length && (
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