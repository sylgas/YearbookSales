import DuplicatesTable from "../DuplicatesTable/DuplicatesTable";
import * as React from "react";
import {array, object} from "prop-types";
import {areDuplicatesMerged} from "../../../utils/duplicates";
import MergedItem from "../MergedItem/MergedItem";

function DuplicatesList({duplicatesList, actions}) {

    const getDuplicateTitle = (duplicate) => (duplicate.firstName + ' ' + duplicate.lastName);

    const renderDuplicates = (duplicates) => (
        duplicatesList.map((duplicates, index) => (
            <div key={duplicates.id} className="duplicates-container">
                <b className="secondary-text text-uppercase">DUPLICATE {index + 1}
                    - {getDuplicateTitle(duplicates.data[0])}</b>
                {areDuplicatesMerged(duplicates) ?
                    <MergedItem duplicate={duplicates.data[0]}/> :
                    <DuplicatesTable duplicates={duplicates} actions={actions}/>
                }
            </div>
        ))
    );

    return (
        <div className="col-md-12">
            <h2>{duplicatesList.length ? duplicatesList.length + " Duplicates Found" : "No Duplicates Found"} </h2>
            {renderDuplicates()}
        </div>
    )
}

DuplicatesList.propTypes = {
    duplicatesList: array,
    actions: object.isRequired
};

DuplicatesList.defaultProps = {
    duplicatesList: []
};


export default DuplicatesList;