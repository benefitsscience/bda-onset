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
import ComposedPlot from "../../technicals/composedplot";
import Map from "../../technicals/map";

function PageOne(props) {

    const info = content[props.condition]
    const [showCost, setCost] = React.useState(false)
    let symbol;
    if (showCost){symbol = "$"} else {symbol=""}

    return(
        <div>
            <Header title={info["title"]} subtitle={info["subtitle"]} />
            <Menu client={props.client}
                  setClient={props.setClient}
                  condition={props.condition}
                  setCondition={props.setCondition}
            />
            <div className="font-inter font-extralight text-gray-600 text-base mx-4 pt-4 text-justify">
                {info["description"]}
            </div>

            <div className="flex flex-col ml:flex-row justify-evenly items-center pt-4 pb-6 gap-6">
                <Indicator data={props.data["pie_pop"]}
                           name={info["indicators"][0]["name"]}
                           tooltip={info["indicators"][0]["tooltip"]}/>
                <Indicator data={props.data["pie_pop"]}
                           name={info["indicators"][1]["name"]}
                           tooltip={info["indicators"][1]["tooltip"]}/>
                {showCost && <Indicator data={props.data["pie_pop"]}
                           name={info["indicators"][2]["name"]}
                           tooltip={info["indicators"][2]["tooltip"]}/>}
            </div>

            <div className="flex flex-col">
                <div className="ml:grid grid-flow-row grid-cols-2 gap-4 ml:m-4">
                    <PieBox
                        title={info["boxTitles"][2]}
                        plot1={<PiePlot
                            data={props.data["pie_pop"]}
                            explanation={props.explanation}
                            colors={popColors}
                            title={"Total Population"}
                            symbol={symbol}
                            showCost={showCost}
                        />}
                        plot2={<PiePlot
                            data={props.data["pie_onset"]}
                            explanation={props.explanation}
                            colors={onsetColors}
                            title={"Onset Breakdown"}
                            symbol={symbol}
                            showCost={showCost}
                        />}
                        text={info["boxDescription"][2]}
                        showCost={showCost}
                        setCost={setCost}
                    />

                    <Box title={info["boxTitles"][1]}
                         plot={<BarPlot
                             data={props.data}
                             condition={props.condition}
                             showCost={showCost}
                         />}
                         text={info["boxDescription"][1]}
                    />

                    <Box title={info["boxTitles"][0]}
                         plot={<OnsetLinePlot
                             data={props.data["lineplot"]}
                             yaxisTitle={"Relative Difference (%)"}
                         />}
                         text={info["boxDescription"][0]}
                    />

                    <Box title={info["boxTitles"][3]}
                         plot={<UniversalLinePlot
                             data={props.data["avg_lineplot"]}
                             yaxisTitle={"General ONSET Probability (%)"}
                         />}
                         text={info["boxDescription"][3]}
                    />

                    <Box title={info["boxTitles"][4]}
                         plot={<ComposedPlot
                             data={props.data["icd10_barplot"]}
                             yaxisTitle={"ICD-10 claim occurrence (%)"}
                             width={40}
                             interval={1}
                         />}
                         text={info["boxDescription"][4]}
                    />

                    <Box title={info["boxTitles"][5]}
                         plot={<ComposedPlot
                             data={props.data["rx_barplot"]}
                             yaxisTitle={"Rx claim occurrence (%)"}
                             width={140}
                             interval={2}
                         />}
                         text={info["boxDescription"][5]}
                    />

                    <Box title={info["boxTitles"][5]}
                         plot={<Map/>}
                         text={info["boxDescription"][5]}
                    />

                </div>
            </div>
            <div className="p-4"/>
        </div>
    )
}

export default PageOne
