import React from 'react';
import Header from "../../utilities/header";
import Menu from "../../utilities/menu";
import Indicator from "../../technicals/indicator";
import Box from "../../utilities/box";
import {Box1} from "../../utilities/box";
import LinePlot from "../../technicals/lineplot";
import BarPlot from "../../technicals/barplot";

function PageOne(props) {
    return(
        <div>
            <Header title={props.title} subtitle={props.subtitle} />

            <Menu />

            <div className="flex flex-col md:flex-row justify-evenly items-center py-8">
                <Indicator value={1} name={"Indicator"} tooltip={"Add more info"}/>
                <Indicator value={2} name={"Indicator"} tooltip={"Add more info"}/>
                <Indicator value={3} name={"Indicator"} tooltip={"Add more info"}/>
            </div>

            <div className="flex flex-col">
                <div className="md:grid grid-flow-row grid-cols-2 grid-rows-2 gap-4 md:m-4">
                    <Box text={"Line chart title"} plot={<LinePlot/>}/>
                    <Box text={"Bar chart title"} plot={<BarPlot/>}/>
                    <Box1 text={"Pie chart title"} plot={<LinePlot/>}/>
                    <Box1 text={"Summary stats title"} plot={<LinePlot/>}/>
                </div>
            </div>
        </div>
    )
}

export default PageOne
