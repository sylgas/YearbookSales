import DuplicatesTable from "../DuplicatesTable/DuplicatesTable";
import * as React from "react";
import PropTypes from "prop-types";
import {areDuplicatesMerged} from "../../../utils/duplicates";
import MergedItem from "../MergedItem/MergedItem";
import "./duplicatesList.less";

const renderDuplicatesTable = (duplicates, actions) => (
    <DuplicatesTable duplicates={duplicates} actions={actions}/>
);

const renderMergedItem = (duplicates) => (
    <MergedItem duplicate={duplicates.data[0]}/>
);

const getDuplicateTitle = (duplicate) => (duplicate.firstName + ' ' + duplicate.lastName).toUpperCase();

const DuplicatesList = ({duplicatesList, actions}) => (
    <div className="col-md-12">
        <h2>{duplicatesList.length ? duplicatesList.length + " Duplicates Found" : "No Duplicates Found"} </h2>
        {duplicatesList.map((duplicates, index) => (
            <div key={duplicates.id} className="duplicates-container">
                <b className="secondary-text">DUPLICATE {index + 1} - {getDuplicateTitle(duplicates.data[0])}</b>
                {areDuplicatesMerged(duplicates) ? renderMergedItem(duplicates) : renderDuplicatesTable(duplicates, actions)}
            </div>
        ))}
    </div>
);

DuplicatesList.propTypes = {
    duplicatesList: PropTypes.array,
    actions: PropTypes.object
};

export default DuplicatesList;