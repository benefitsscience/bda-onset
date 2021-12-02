import React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";
import {onsetColors} from "../pages/constants";

function BarPlot(props){
    return(
        <ResponsiveContainer width="100%" height={320}>
        <BarChart data={props.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 'auto']}
                   label={{ value: "Percentage of Spine Surgeries (%)",
                       position: "insideLeft",
                       angle: -90,
                       dy: 130}}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="7-8%" fill={onsetColors[0]} />
            <Bar dataKey="2-4%" fill={onsetColors[1]}/>
            <Bar dataKey="1-2%" fill={onsetColors[2]}/>
            <Bar dataKey="0.4-0.6%" fill={onsetColors[3]}/>
        </BarChart>
        </ResponsiveContainer>
    )
}
export default BarPlot
