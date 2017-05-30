import * as React from "react";
import "./loadableComponentCreator.less";

const LoadableComponentCreator = (Component) => (props) => {
    if (props.isLoading) {
        return (
            <div className="spinner">
                <i className="fa fa-spinner fa-spin fa-4x fa-fw"/>
            </div>
        );
    }
    return <Component {...props}/>
};

export default LoadableComponentCreator;