import React from 'react';
import {PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer} from 'recharts';


const getExplanation = (explanation, label) => {
    for (const [, value] of Object.entries(explanation)) {
        console.log(value)
        if (value["Probability"] === label){return value["Reason"]}
    }
}


const CustomTooltip = ({ active, payload, explanation, symbol}) => {
  if (active) {
    return (
      <div className="font-inter bg-gray-200 bg-opacity-80 rounded-md shadow-md text-justify w-auto p-2">
        <p>{`${payload[0].name} : ${Math.round(payload[0].value)}${symbol}`}</p>
        <p className="font-extralight">{getExplanation(explanation, payload[0].name)}</p>
      </div>
    );
  }
  return null;
};


function PiePlot(props){

    let data;
    if (props.showCost){data = "Estimated Cost"} else{data = "Population"}

    return (
        <ResponsiveContainer width={350} height={320}>
        <PieChart margin={{ top: 5, right: 25, left: 25}}>
        <text x={"50%"}
              y={"5%"}
              textAnchor="end"
              dominantBaseline="middle"
              className="font-inter text-gray-800">
            {props.title}
        </text>
        <Tooltip content={<CustomTooltip symbol={props.symbol} explanation={props.explanation}/>} />
        <Legend />
          <Pie
              data={props.data}
              dataKey={data}
              nameKey="Class"
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
                      const RADIAN = Math.PI / 180;
                      const radius = 25 + innerRadius + (outerRadius - innerRadius);
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);

                      if (!props.showCost){
                      return (
                        <text
                        fill={props.colors[index]}
                          x={x}
                          y={y}
                          textAnchor={x > cx ? "start" : "end"}
                          dominantBaseline="central"
                        >
                          {Math.round(value)}{props.symbol}
                        </text>
                      );}
                      else {
                      return (
                        <text
                        fill={props.colors[index]}
                          x={x}
                          y={y}
                          textAnchor={x > cx ? "start" : "end"}
                          dominantBaseline="central"
                        >
                          {Math.round(value).toLocaleString()}{props.symbol}
                        </text>
                      );
                      }
              }}
              legendType="triangle"
          >
              {props.data.map((entry, index) => (
              <Cell key={`${index}%`} fill={props.colors[index]} />
            ))}
          </Pie>
        </PieChart>
        </ResponsiveContainer>
    )
}

export default PiePlot