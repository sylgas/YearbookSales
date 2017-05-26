import * as React from "react";
import "./dashboardPage.less";
import SalesBox from "../YearbookSales/SalesBox";
import ProgressBox from "../YearbookProgress/ProgressBox";

const DashboardPage = () => {
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
};

export default DashboardPage;