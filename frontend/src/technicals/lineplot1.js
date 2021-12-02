import React from 'react';
import Papa from 'papaparse';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip} from "recharts";
import {onsetColors} from "../utilities/constants";

function LinePlot1(props){
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

export default LinePlot1