import './salesBox.less';

import {connect} from 'react-redux';
import SalesBox from "./SalesBox";
import * as salesEvents from "../../../actions/salesEvents";
import {bindActionCreators} from "redux";

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

function formatDate(date) {
    if (!date) {
        return '';
    }
    return [
        pad(date.getMonth() +1, 1),
        pad(date.getDate(), 2),
        pad(date.getFullYear(), 4),
    ].join('/');
}

function pad(numberString, size) {
    let padded = numberString.toString();
    while (padded.length < size) padded = '0'.repeat(size - padded.length) + padded;
    return padded;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(salesEvents, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesBox);
