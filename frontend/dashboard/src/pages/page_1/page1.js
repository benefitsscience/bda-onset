import React from 'react';
import Header from "../../utilities/header";
import Menu from "../../utilities/menu";
import Indicator from "../../technicals/indicator";
import Box, {PieBox} from "../../utilities/box";
import LinePlot from "../../technicals/lineplot";
import BarPlot from "../../technicals/barplot";
import PiePlot from "../../technicals/pieplot";
import {popColors, onsetColors, dataURLs} from "../../utilities/constants";
import {projectDescription, indicators, chartTitles, plotDescriptions} from "./page1Text";

function PageOne(props) {
    return(
        <div>
            <Header title={props.title} subtitle={props.subtitle} />
            <Menu client={props.client} setClient={props.setClient}/>

            <div className="font-inter font-extralight text-gray-600 text-base mx-4 pt-4 text-justify">
                {projectDescription}
            </div>

            <div className="flex flex-col ml:flex-row justify-evenly items-center pt-4 pb-6 gap-6">
                <Indicator dataPath={dataURLs[props.client]["pie1"]} name={indicators[0]["name"]} tooltip={indicators[0]["tooltip"]}/>
                <Indicator dataPath={dataURLs[props.client]["pie1"]} name={indicators[1]["name"]} tooltip={indicators[1]["tooltip"]}/>
            </div>

            <div className="flex flex-col">
                <div className="ml:grid grid-flow-row grid-cols-2 grid-rows-2 gap-4 ml:m-4">
                    <PieBox
                        title={chartTitles[2]}
                        plot1={<PiePlot
                            dataPath={dataURLs[props.client]["pie1"]}
                            colors={popColors}
                            title={"Total Population"}
                            symbol={''}
                        />}
                        plot2={<PiePlot
                            dataPath={dataURLs[props.client]["pie2"]}
                            colors={onsetColors}
                            title={"Onset Breakdown"}
                            symbol={""}
                        />}
                        text={plotDescriptions["pieBox"]}
                    />
                    <Box title={chartTitles[1]}
                         plot={<BarPlot dataPath={dataURLs[props.client]["bar"]}/>}
                         text={plotDescriptions["barBox"]}
                    />
                    <Box title={chartTitles[0]}
                         plot={<LinePlot dataPath={dataURLs[props.client]["line"]}
                                         zeroLine={true}
                                         yaxisTitle={"Relative Difference (%)"}
                         />}
                         text={plotDescriptions["lineBox"]}
                    />
                    <Box title={chartTitles[3]}
                         plot={<LinePlot dataPath={dataURLs[props.client]["line"]}
                                         zeroLine={false}
                                         yaxisTitle={"Universal Difference (%)"}
                         />}
                         text={plotDescriptions["newBox"]}
                    />
                </div>
            </div>
            <div className="p-4"/>
        </div>
    )
}

export default PageOne
