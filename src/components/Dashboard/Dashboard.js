import * as React from "react";
import "./dashboard.less";
import SalesBox from "../YearbookSales/SalesBox";
import ProgressBox from "../YearbookProgress/ProgressBox";

class Dashboard extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="col-md-8">
                    <ProgressBox/>
                    <div className="col-md-7 pl-0">
                        <SalesBox/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;