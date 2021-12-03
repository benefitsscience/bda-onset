import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, ReferenceLine} from "recharts";
import {onsetColors} from "../pages/constants";

export function OnsetLinePlot(props){
    const firstEntry = props.data[0]
    let labels = []
    for (const [key, ] of Object.entries(firstEntry)) {
        if (key !== "month"){labels.push(key);}
    }
    labels = labels.slice(0, -1)
    return(
        <ResponsiveContainer width="100%" height={320}>
        <LineChart data={props.data}
                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={['dataMin', 'dataMax']}
                   label={{ value: props.yaxisTitle,
                       position: "insideLeft",
                       angle: -90,
                       dy: 180}}
            />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="black" strokeWidth={2}/>
            {labels.map((label, index) => (
                <Line type="monotone" dataKey={label} stroke={onsetColors[index]} strokeWidth={1.5}/>
                ))}
        </LineChart>
        </ResponsiveContainer>
    )
}

export function UniversalLinePlot(props){
    const firstEntry = props.data[0]
    let labels = []
    for (const [key, ] of Object.entries(firstEntry)) {
        if (key !== "month"){labels.push(key);}
    }
    return(
        <ResponsiveContainer width="100%" height={320}>
        <LineChart data={props.data}
                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Month" />
            <YAxis domain={['dataMin', 'dataMax']}
                   label={{ value: props.yaxisTitle,
                       position: "insideLeft",
                       angle: -90,
                       dy: 120,
                       dx: -15
                   }}
            />
            <Tooltip />
            <Legend />
            {labels.map((label, index) => (
                <Line type="monotone" dataKey={label} stroke={onsetColors[index]} strokeWidth={1.5}/>
                ))}
        </LineChart>
        </ResponsiveContainer>
    )
}