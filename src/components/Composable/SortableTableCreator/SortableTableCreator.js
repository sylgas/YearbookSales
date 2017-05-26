import * as React from "react";

const SortableTableCreator = (Component) => {
    return (props) => (<Component {...props}/>)
};