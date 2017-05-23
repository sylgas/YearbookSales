import "./progressBox.less";

import {connect} from "react-redux";
import ProgressBox from "./ProgressBox";
import {bindActionCreators} from "redux";

import * as deadlinesEvents from "../../../actions/deadlinesEvents";


function mapStateToProps(state) {
    return {
        deadlines: state.deadlines.ordered,
        totalSubmitted: state.deadlines.totalSubmitted
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(deadlinesEvents, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBox);
