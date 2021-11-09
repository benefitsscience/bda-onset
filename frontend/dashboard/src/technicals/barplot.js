import {useState} from "react";
import {readRemoteFile} from "react-papaparse";
import csvFile from "../data/E-Transfer barplot.csv";
import {Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";

function BarPlot(){
    const [parsedCsvData, setParsedCsvData] = useState([]);
    readRemoteFile(csvFile, {
        download: true,
        complete: results => {
      setParsedCsvData(results.data)    },
        header: true
    })

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