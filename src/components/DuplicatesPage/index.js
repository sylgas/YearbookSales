import DuplicatesPage from "./DuplicatesPage";
import {bindActionCreators} from "redux";
import duplicatesEvents from "../../actions/duplicatesEvents";
import connect from "react-redux/es/connect/connect";

function mapStateToProps(state) {
    return {
        duplicatesSets: state.duplicates
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(duplicatesEvents, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DuplicatesPage);