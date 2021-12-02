import React from 'react';
import Papa from 'papaparse';
import {Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";
import {onsetColors} from "../utilities/constants";

function BarPlot(props){
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
        <BarChart data={parsedCsvData}>
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