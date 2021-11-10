import React from 'react';
import {PieChart, Pie, Tooltip, Cell, Legend} from 'recharts';
import Papa from "papaparse";


const getIntroOfPage = (label) => {
  if (label === '7-8%') {
    return "Spondylopathies";
  }
  if (label === '2-4%') {
    return "Dorsopathies with Disk Disorders and/or High Rx cost";
  }
  if (label === '1-2%') {
    return "Dorsopathies with High cost claims or Disorders of the Nervous System";
  }
  if (label === '0.4-0.6%') {
    return 'Dorsopathies without complications';
  }
    return '';
};

const CustomTooltip = ({ active, payload, symbol}) => {
  if (active) {
    return (
      <div className="bg-gray-200 bg-opacity-80 rounded-md shadow-md text-justify w-auto p-2">
        <p>{`${payload[0].name} : ${Math.round(payload[0].value)}${symbol}`}</p>
        <p>{getIntroOfPage(payload[0].name)}</p>
      </div>
    );
  }

  return null;
};


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
        <Tooltip content={<CustomTooltip symbol={props.symbol}/>} />
        <Legend />
          <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={"60%"}
              fill="#8884d8"
              label={({
                      cx,
                      cy,
                      midAngle,
                      innerRadius,
                      outerRadius,
                      value,
                      index
                    }) => {
                      console.log("handling label?");
                      const RADIAN = Math.PI / 180;
                      // eslint-disable-next-line
                      const radius = 25 + innerRadius + (outerRadius - innerRadius);
                      // eslint-disable-next-line
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      // eslint-disable-next-line
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);

                      return (
                        <text
                        fill={props.colors[index % props.colors.length]}
                          x={x}
                          y={y}
                          textAnchor={x > cx ? "start" : "end"}
                          dominantBaseline="central"
                        >
                          {Math.round(value)}{props.symbol}
                        </text>
                      );
              }}
              legendType="triangle"
          >
              {data.map((entry, index) => (
              <Cell key={`${index}%`} fill={props.colors[index % props.colors.length]} />
            ))}
          </Pie>
        </PieChart>
    )
}

export default PiePlot