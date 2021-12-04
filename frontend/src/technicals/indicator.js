import React from "react";

function Indicator(props) {
    let value;
    if (
        props.data.length && props.name === "Total Population"
    ){value = props.data[0]["Population"] + props.data[1]["Population"]}
    else if (
        props.data.length && props.name === "Population At-Risk")
    {value = props.data[1]["Population"]}
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