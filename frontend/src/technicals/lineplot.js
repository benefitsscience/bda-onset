import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, ReferenceLine} from "recharts";
import {onsetColors} from "../pages/constants";

export function OnsetLinePlot(props){
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
                       dy: 120}}
            />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="black" strokeWidth={2}/>
            <Line type="monotone" dataKey="7-8%" stroke={onsetColors[0]} strokeWidth={1.5}/>
            <Line type="monotone" dataKey="2-4%" stroke={onsetColors[1]} strokeWidth={2}/>
            <Line type="monotone" dataKey="1-2%" stroke={onsetColors[2]} strokeWidth={2}/>
            <Line type="monotone" dataKey="0.4-0.6%" stroke={onsetColors[3]} strokeWidth={2}/>
        </LineChart>
        </ResponsiveContainer>
    )
}

export function UniversalLinePlot(props){
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
                       dy: 90,
                       dx: -15
                   }}
            />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ONSET" stroke={onsetColors[0]} strokeWidth={1.5}/>
            <Line type="monotone" dataKey="Universal" stroke={onsetColors[1]} strokeWidth={1.5}/>
        </LineChart>
        </ResponsiveContainer>
    )
}