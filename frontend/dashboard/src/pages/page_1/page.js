import React from 'react';
import Header from "../../utilities/header";
import Menu from "../../utilities/menu";
import Indicator from "../../technicals/indicator";

function PageOne(props) {
    return(
        <div>
            <Header title={props.title} subtitle={props.subtitle} />

            <Menu />

            <div className="flex flex-col md:flex-row justify-evenly items-center py-12">
                <Indicator value={1} name={"Indicator"} tooltip={"Add more info"}/>
                <Indicator value={2} name={"Indicator"} tooltip={"Add more info"}/>
                <Indicator value={3} name={"Indicator"} tooltip={"Add more info"}/>
            </div>

        </div>
    )
}

export default PageOne
