import bindActionCreators from "redux/es/bindActionCreators";
import duplicatesEvents from "../../../actions/duplicatesEvents";
import DuplicatesList from "./DuplicatesList";
import LoadableComponentCreator from "../../Composable/LoadableComponentCreator/LoadableComponentCreator";
import connect from "react-redux/es/connect/connect";
import "./duplicatesList.less";

function mapStateToProps(state) {
    return {
        duplicatesList: state.duplicates,
        isLoading: state.loaders.duplicates
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(duplicatesEvents, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadableComponentCreator(DuplicatesList));