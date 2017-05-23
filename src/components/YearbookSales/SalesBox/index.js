import "./salesBox.less";

import {connect} from "react-redux";
import SalesBox from "./SalesBox";
import * as salesEvents from "../../../actions/salesEvents";
import {bindActionCreators} from "redux";
import {formatDate} from "../../../utils/date";

function mapStateToProps(state) {
    return {
        finalSales: formatDate(state.sales.finalDate),
        personalization: formatDate(state.sales.personalizationDate),
        quantity: formatDate(state.sales.exactQuantityDate),
        campus: state.sales.campus,
        online: state.sales.online,
        max: state.sales.max
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(salesEvents, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesBox);
