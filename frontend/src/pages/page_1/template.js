import React from 'react';
import Header from "../../utilities/header";
import Menu from "../../utilities/menu";
import Indicator from "../../technicals/indicator";
import Box, {PieBox} from "../../utilities/box";
import {OnsetLinePlot, UniversalLinePlot} from "../../technicals/lineplot";
import BarPlot from "../../technicals/barplot";
import PiePlot from "../../technicals/pieplot";
import {popColors, onsetColors} from "../constants";
import {content} from "./content";

function PageOne(props) {
    return(
        <div>
            <Header title={content["title"]} subtitle={content["subtitle"]} />
            <Menu client={props.client} setClient={props.setClient}/>

            <div className="font-inter font-extralight text-gray-600 text-base mx-4 pt-4 text-justify">
                {content["description"]}
            </div>

            <div className="flex flex-col ml:flex-row justify-evenly items-center pt-4 pb-6 gap-6">
                <Indicator data={props.data["pie_pop"]}
                           name={content["indicators"][0]["name"]}
                           tooltip={content["indicators"][0]["tooltip"]}/>
                <Indicator data={props.data["pie_pop"]}
                           name={content["indicators"][1]["name"]}
                           tooltip={content["indicators"][1]["tooltip"]}/>
            </div>

            <div className="flex flex-col">
                <div className="ml:grid grid-flow-row grid-cols-2 grid-rows-2 gap-4 ml:m-4">
                    <PieBox
                        title={content["boxTitles"][2]}
                        plot1={<PiePlot
                            data={props.data["pie_pop"]}
                            colors={popColors}
                            title={"Total Population"}
                            symbol={''}
                        />}
                        plot2={<PiePlot
                            data={props.data["pie_onset"]}
                            colors={onsetColors}
                            title={"Onset Breakdown"}
                            symbol={""}
                        />}
                        text={content["boxDescription"][2]}
                    />
                    <Box title={content["boxTitles"][1]}
                         plot={<BarPlot data={props.data["barplot"]}/>}
                         text={content["boxDescription"][1]}
                    />
                    <Box title={content["boxTitles"][0]}
                         plot={<OnsetLinePlot
                             data={props.data["lineplot"]}
                             yaxisTitle={"Relative Diff with Univ Avg (%)"}
                         />}
                         text={content["boxDescription"][0]}
                    />
                    <Box title={content["boxTitles"][3]}
                         plot={<UniversalLinePlot
                             data={props.data["avg_lineplot"]}
                             yaxisTitle={"General ONSET Probability (%)"}
                         />}
                         text={content["boxDescription"][3]}
                    />
                </div>
            </div>
            <div className="p-4"/>
        </div>
    )
}

export default PageOne
