import {data} from "./lineplot";
import {Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";


function BarPlot(){
    return(
        <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        </ResponsiveContainer>
    )
}

export default BarPlot