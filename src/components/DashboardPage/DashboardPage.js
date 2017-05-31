import * as React from "react";
import "./dashboardPage.less";
import SalesBox from "../YearbookSales/SalesBox";
import ProgressBox from "../YearbookProgress/ProgressBox";
import NavbarPage from "../Common/NavbarPage/NavbarPage";

function DashboardPage() {
    return (
        <NavbarPage>
            <div className="col-md-8">
                <ProgressBox/>
                <div className="col-md-7 pl-0">
                    <SalesBox/>
                </div>
            </div>
        </NavbarPage>
    );
}

export default DashboardPage;