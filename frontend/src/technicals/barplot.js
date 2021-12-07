import React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";
import {onsetColors} from "../pages/constants";

function BarPlot(props){
    let type;
    if (props.showCost){
        type = "barplot_cost"
    } else {
        type = "barplot"
    }
    const data = props.data[type]
    let labels = []
    for (const [key, ] of Object.entries(data[0])) {
        if (key !== "month"){labels.push(key);}
    }

    return(
        <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            {!props.showCost &&
                <YAxis domain={[0, 'auto']}
                       label={{ value: "Pct. of " + props.condition + " Surgeries (%)",
                           position: "insideLeft",
                           angle: -90,
                           dy: 120}}
            />}
            {props.showCost &&
                <YAxis domain={[0, 'auto']}
                       width={100}
                       label={{ value: "Cost of " + props.condition + " Surgeries ($)",
                           position: "insideLeft",
                           angle: -90,
                           dx: 0,
                           dy: 120}}
                       tickFormatter={tick => {return tick.toLocaleString();}}
            />
            }
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
