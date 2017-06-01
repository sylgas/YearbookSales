import React from "react";
import "./loadableComponentCreator.less";

const LoadableComponentCreator = (Component) => (props) => {
    if (props.isLoading) {
        return (
            <div className="loader">
                <h3>{props.loadingText}<i className="fa fa-spinner fa-spin fa-2x fa-fw"></i></h3>
            </div>
        );
    }
    return <Component {...props}/>
};

export default LoadableComponentCreator;