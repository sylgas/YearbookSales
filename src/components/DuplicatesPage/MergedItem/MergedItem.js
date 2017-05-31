import Table from "../../Common/Table/Table";
import * as React from "react";
import {DUPLICATES_TABLE_HEADERS} from "../../../constants/duplicatesHeaders";
import {map, values} from "lodash";
import {object} from "prop-types";

function MergedItem({duplicate}) {

    const renderMergedItemRowFields = () => {
        return map(values(duplicate), (value, index) => (
            <td key={'key-' + index}>{value}</td>
        ));
    };

    return (
        <Table headers={DUPLICATES_TABLE_HEADERS}>
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