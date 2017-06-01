import React from "react";

const SortableTableCreator = (Component) => {
    return (props) => (<Component {...props}/>)
};

export default SortableTableCreator;