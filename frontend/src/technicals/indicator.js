import React from "react";
import {content} from "../pages/page_1/content";

function Indicator(props) {

    let value;
    if (
        props.data.length && props.name === content["indicators"][0]["name"]
    ){value = props.data[0]["value"] + props.data[1]["value"]}
    else if (
        props.data.length && props.name === content["indicators"][1]["name"])
    {value = props.data[1]["value"]}
    else {value = 0}

    return(
        <div className="has-tooltip">
            <span className="tooltip rounded shadow-lg p-1 bg-gray-50 text-gray-900 bg-opacity-70 -mt-8">
                {props.tooltip}
            </span>
            <div className="flex-column justify-center ml:py-0">
                <p className="lining-nums text-center text-6xl text-medium text-gray-900">
                    {value}
                </p>
                <p className="font-inter text-3xl text-center font-extralight text-gray-600">
                    {props.name}
                </p>
            </div>
        </div>
    )
}

export default Indicator