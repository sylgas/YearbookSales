import * as React from "react";
import "./salesBoxLegend.less";

export default ({campus, online}) => (
    <table>
        <tbody>
        <tr>
            <td><span className="legend-square legend-square-green"/><b>ON CAMPUS</b></td>
            <td><span className="legend-square legend-square-yellow"/><b>ONLINE</b></td>
        </tr>
        <tr>
            <td><h2 className="legend-data legend-data-green">{campus}</h2></td>
            <td><h2 className="legend-data legend-data-yellow">{online}</h2></td>
        </tr>
        </tbody>
    </table>
);
