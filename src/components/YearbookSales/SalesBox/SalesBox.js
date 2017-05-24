import React from "react";
import ButtonsFooter from "../../Common/ButtonsFooter";
import SalesBoxLegend from "../SalesBoxLegend/SalesBoxLegend";
import SalesBoxChart from "../SalesBoxChart/SalesBoxChart";
import PropType from "prop-types";
import Spinner from "../../Common/Spinner";

class SalesBox extends React.Component {

    componentDidMount() {
        this.props.actions.fetchSales();
    }

    componentWillReceiveProps() {
        this.setState({chartDataFetched: true})
    }

    render() {
        return (
            <div className="box">
                <div className="box-header">
                    <div className="box-header-section clearfix">
                        <h2>Yearbook Sales</h2>
                        <span className="pull-right"><b>Final Sales: </b><a>{this.props.finalSales}</a></span>
                    </div>
                    <div className="box-header-section clearfix">
                        <span className="pull-left"><b>Personalization: </b>{this.props.personalization}</span>
                        <span className="pull-right"><b>Exact Quantity: </b>{this.props.quantity}</span>
                    </div>
                </div>
                <div className="box-content">
                    <Spinner isLoading={this.props.isLoading}/>
                    <SalesBoxLegend campus={this.props.campus} online={this.props.online}/>
                    <SalesBoxChart campus={this.props.campus} online={this.props.online} max={this.props.max}/>
                </div>
                <div className="box-footer">
                    <ButtonsFooter
                        leftButton="Manage Campaigns"
                        rightButton="View Details"
                    />
                </div>
            </div>
        );
    }
}

SalesBox.propTypes = {
    campus: PropType.number,
    online: PropType.number,
    max: PropType.number,
    finalSales: PropType.string,
    personalization: PropType.string,
    quantity: PropType.string
};

export default SalesBox;