import * as React from "react";
import Link from "react-router/es/Link";
import {element} from "prop-types";

function NavbarPage({children}) {
    return (
        <div>
            <nav className="navbar navbar-default navbar-static-top" role="navigation">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Balfour</Link>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/duplicates">Duplicates</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                {children}
            </div>
        </div>
    );
}

NavbarPage.propTypes = {
    children: element.isRequired
};

export default NavbarPage;