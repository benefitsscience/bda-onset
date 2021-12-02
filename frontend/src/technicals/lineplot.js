import React from 'react';
import Papa from 'papaparse';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, ReferenceLine} from "recharts";
import {onsetColors} from "../pages/constants";

function LinePlot(props){
    const [parsedCsvData, setParsedCsvData] = React.useState([]);
      React.useEffect(() => {
        async function getData() {
          const response = await fetch(props.dataPath)
          const reader = response.body.getReader()
          const result = await reader.read() // raw array
          const decoder = new TextDecoder('utf-8')
          const csv = decoder.decode(result.value) // the csv text
          const results = Papa.parse(csv, {header: true, dynamicTyping: true}) // object with { data, errors, meta }
          const rows = results.data // array of objects
          setParsedCsvData(rows)
        }
        getData()
      }, [props.dataPath])


    return(
        <ResponsiveContainer width="100%" height={320}>
        <LineChart data={parsedCsvData}
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

export default LinePlot