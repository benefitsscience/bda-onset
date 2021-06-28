import React from 'react';
import Header from "../../utilities/header";
import Menu from "../../utilities/menu";
import Indicator from "../../technicals/indicator";
import Box from "../../utilities/box";

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
                    <Box text={"This is a box 1."}/>
                    <Box text={"This is a box 2."}/>
                    <Box text={"This is a box 3."}/>
                    <Box text={"This is a box 4."}/>
                </div>
            </div>
        </div>
    )
}

export default PageOne
