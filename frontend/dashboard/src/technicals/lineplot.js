import {useState} from "react";
import {readRemoteFile} from "react-papaparse";
import csvFile from "../data/E-Transfer lineplot.csv";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip} from "recharts";

function LinePlot(){
    const [parsedCsvData, setParsedCsvData] = useState([]);
    readRemoteFile(csvFile, {
        download: true,
        complete: results => {
      setParsedCsvData(results.data)    },
        header: true
    })

    return(
        <ResponsiveContainer width="100%" height={320}>
        <LineChart data={parsedCsvData}
                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="7-8%" stroke="#AFDDD5" />
            <Line type="monotone" dataKey="2-4%" stroke="#FFA700" />
            <Line type="monotone" dataKey="1-2%" stroke="#FFCCCD" />
            <Line type="monotone" dataKey="0.4-0.6%" stroke="#64864A" />
        </LineChart>
        </ResponsiveContainer>
    )
}

export default LinePlot