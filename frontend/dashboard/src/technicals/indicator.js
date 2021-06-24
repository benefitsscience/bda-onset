import React from "react";

// TODO: simplify component (individual) and move more details to the actual page

function Indicator(props) {
    return(
        <div className="has-tooltip">
            <span className="tooltip rounded shadow-lg p-1 bg-gray-50 text-blue-400 -mt-8">
                {props.tooltip}
            </span>
            <div className="flex-column justify-center pb-3 md:py-0">
                <p className="lining-nums text-center text-6xl text-medium text-gray-900">{props.value}</p>
                <p className="text-3xl text-center text-light text-gray-600">{props.name}</p>
            </div>
        </div>

    )
}

export default Indicator