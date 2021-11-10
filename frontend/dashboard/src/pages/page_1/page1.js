import React from 'react';
import Header from "../../utilities/header";
import Menu from "../../utilities/menu";
import Indicator from "../../technicals/indicator";
import Box, {PieBox} from "../../utilities/box";
import LinePlot from "../../technicals/lineplot";
import BarPlot from "../../technicals/barplot";
import PiePlot from "../../technicals/pieplot";
import csv1 from "../../data/Energy Transfer/E-Transfer Pie1.csv";
import csv2 from "../../data/Energy Transfer/E-Transfer Pie2.csv";
import {popColors, onsetColors} from "../../utilities/constants";

function PageOne(props) {
    return(
        <div>
            <Header title={props.title} subtitle={props.subtitle} />

            <Menu />

            <div className="font-inter font-extralight text-gray-600 text-base mx-4 pt-4 text-justify">
                Add a description of the indicators or briefly explain the purpose of the Insight section.
                <br/>
                This can go over multiple lines.
            </div>

            <div className="flex flex-col md:flex-row justify-evenly items-center pt-4 pb-8">
                <Indicator value={1} name={"Indicator"} tooltip={"Add more info"}/>
                <Indicator value={2} name={"Indicator"} tooltip={"Add more info"}/>
                <Indicator value={3} name={"Indicator"} tooltip={"Add more info"}/>
            </div>

            <div className="flex flex-col">
                <div className="md:grid grid-flow-row grid-cols-2 grid-rows-2 gap-4 md:m-4">
                    <Box text={"Line chart title"} plot={<LinePlot/>}/>
                    <Box text={"Bar chart title"} plot={<BarPlot/>}/>
                    <PieBox
                        text={"Pie chart title"}
                        plot1={<PiePlot
                            csv={csv1}
                            colors={popColors}
                            title={"Total Population"}
                        />}
                        plot2={<PiePlot
                            csv={csv2}
                            colors={onsetColors}
                            title={"Onset Breakdown"}
                        />}

                    />
                    <Box text={"Summary stats title"} plot={<LinePlot/>}/>
                </div>
            </div>
            <div className="p-4"/>
        </div>
    )
}

export default PageOne
