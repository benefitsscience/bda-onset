import React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";
import {onsetColors} from "../pages/constants";

function BarPlot(props){
    const firstEntry = props.data[0]
    let labels = []
    for (const [key, ] of Object.entries(firstEntry)) {
        if (key !== "month"){labels.push(key);}
    }
    labels = labels.slice(0, -1)
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
            {labels.map((label, index) => (
                <Bar
                    dataKey={label}
                    fill={onsetColors[index]}/>
            ))}
        </BarChart>
        </ResponsiveContainer>
    )
}
export default BarPlot
