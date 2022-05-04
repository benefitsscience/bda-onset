import React, {PureComponent} from 'react';
import {ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from 'recharts';
import {onsetColors} from "../pages/constants";

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={8} textAnchor="end" fill="#666">
          {payload.value.split(/[\/\s,\-:]+/).slice(0, 1)}
        </text>
      </g>
    );
  }
}

function ComposedPlot(props){
    return (
        <ResponsiveContainer width="100%" height={560}>
            <ComposedChart
                layout="vertical"
                data={props.data}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" label={{ value: props.yaxisTitle, position: "insideBottom", dy: 15}}/>
            <YAxis dataKey="claim"
                   type="category"
                   width={props.width}
                   tick={<CustomizedAxisTick/>}
                   interval={props.interval}/>
            <Tooltip />
            <Legend verticalAlign={'bottom'} wrapperStyle={{bottom: -10, left: 35}}/>
            <Bar dataKey="Company Pct." fill={onsetColors[0]} />
            <Line type="monotone" dataKey="Universal Pct." stroke={onsetColors[1]} />
            </ComposedChart>
      </ResponsiveContainer>
    );
}

export default ComposedPlot