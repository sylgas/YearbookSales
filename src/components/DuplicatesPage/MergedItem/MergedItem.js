import Table from "../../Common/Table/Table";
import React from "react";
import {DUPLICATES_TABLE_HEADERS} from "../../../constants/duplicatesHeaders";
import {map, values} from "lodash";
import {object} from "prop-types";

function MergedItem({duplicate}) {

    const renderMergedItemRowFields = () => {
        return map(values(duplicate), (value, index) => (
            <td key={'key-' + index}>{value}</td>
        ));
    };

    const headers = {
        status: [
            {
                value: 'status',
                label: `${duplicate.firstName} ${duplicate.lastName} has been successfully merged.`,
                colSpan: DUPLICATES_TABLE_HEADERS.length
            }
        ],
        header: DUPLICATES_TABLE_HEADERS
    };

    return (
        <Table headersMap={headers}>
            <tr>
                {renderMergedItemRowFields()}
            </tr>
        </Table>
    )
}

MergedItem.propTypes = {
    duplicate: object.isRequired
};

export default MergedItem;