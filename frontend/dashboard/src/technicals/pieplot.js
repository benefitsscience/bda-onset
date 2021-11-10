import React from 'react';
import {PieChart, Pie, ResponsiveContainer, Tooltip, Cell, Legend} from 'recharts';
import Papa from "papaparse";

function PiePlot(props){
      const [data, setData] = React.useState([]);
      React.useEffect(() => {
        async function getData() {
          const response = await fetch(props.csv)
          const reader = response.body.getReader()
          const result = await reader.read() // raw array
          const decoder = new TextDecoder('utf-8')
          const csv = decoder.decode(result.value) // the csv text
          const results = Papa.parse(csv, {header: true, dynamicTyping: true}) // object with { data, errors, meta }
          const rows = results.data // array of object
          setData(rows)
        }
        getData()
      }, [])

    return (
        <PieChart width={350} height={320} margin={{ top: 5, right: 25, left: 25}}>
        <text x={"50%"}
              y={"5%"}
              textAnchor="end"
              dominantBaseline="middle"
              className="font-inter text-gray-800">
            {props.title}
        </text>
        <Tooltip />
        <Legend />
          <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={"60%"}
              fill="#8884d8"
              label
              legendType="triangle"
          >
              {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={props.colors[index % props.colors.length]} />
            ))}
          </Pie>
        </PieChart>
    )
}

export default PiePlot