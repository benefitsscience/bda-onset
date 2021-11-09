import React from 'react';
import Papa from 'papaparse';
import csvFile from "../data/E-Transfer barplot.csv";
import {Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";


function BarPlot(){
    const [parsedCsvData, setParsedCsvData] = React.useState([]);
      React.useEffect(() => {
        async function getData() {
          const response = await fetch(csvFile)
          const reader = response.body.getReader()
          const result = await reader.read() // raw array
          const decoder = new TextDecoder('utf-8')
          const csv = decoder.decode(result.value) // the csv text
          const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
          const rows = results.data // array of objects
          setParsedCsvData(rows)
        }
        getData()
      }, [])

    return(
        <ResponsiveContainer width="100%" height={320}>
        <BarChart data={parsedCsvData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="7-8%" fill="#AFDDD5" />
            <Bar dataKey="2-4%" fill="#FFA700" />
            <Bar dataKey="1-2%" fill="#FFCCCD" />
            <Bar dataKey="0.4-0.6%" fill="#64864A" />
        </BarChart>
        </ResponsiveContainer>
    )
}

export default BarPlot