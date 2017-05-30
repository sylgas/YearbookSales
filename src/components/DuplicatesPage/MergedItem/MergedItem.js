import Table from "../../Common/Table/Table";
import * as React from "react";
import {DUPLICATES_TABLE_HEADERS} from "../../../constants/duplicatesHeaders";
import _ from "lodash";

const MergedItem = ({duplicate}) => (
    <Table headers={DUPLICATES_TABLE_HEADERS}>
        <tr>
            {_.values(duplicate).map((value, index) => (
                <td key={'key-' + index}>{value}</td>
            ))}
        </tr>
    </Table>
);

export default MergedItem;