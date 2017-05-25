import "./progressBox.less";

import {connect} from "react-redux";
import ProgressBox from "./ProgressBox";
import {bindActionCreators} from "redux";

import * as deadlinesEvents from "../../../actions/deadlinesEvents";
import {getDeadlinesWithSubmittedPages, getTotalPages, getTotalSubmitted} from "../../../selectors/deadlinesSelector";


function mapStateToProps(state) {
    return {
        deadlines: getDeadlinesWithSubmittedPages(state),
        totalSubmitted: getTotalSubmitted(state),
        pages: getTotalPages(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(deadlinesEvents, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBox);
