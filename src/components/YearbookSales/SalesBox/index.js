import './salesBox.less';

import {connect} from 'react-redux';
import SalesBox from "./SalesBox";

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
    return [
        pad(date.getMonth() + 1, 2),
        pad(date.getDate(), 2),
        pad(date.getYear(), 2),
    ].join('/');
}

function pad(numberString, size) {
    let padded = numberString.toString();
    while (padded.length < size) padded = '0'.repeat(size - padded.length) + padded;
    return padded;
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesBox);
