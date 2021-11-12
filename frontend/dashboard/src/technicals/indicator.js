import React from "react";
import Papa from "papaparse";
import {indicators} from "../pages/page_1/page1Text";

function Indicator(props) {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        async function getData() {
          const response = await fetch(props.dataPath)
          const reader = response.body.getReader()
          const result = await reader.read() // raw array
          const decoder = new TextDecoder('utf-8')
          const csv = decoder.decode(result.value) // the csv text
          const results = Papa.parse(csv, {
              header: true,
              complete(results, file) {console.log(results.data)
              },
              dynamicTyping: true}) // object with { data, errors, meta }
          const rows = results.data // array of objects
          setData(rows)
        }
        getData()
    }, [props.dataPath])

    let value;
    if (data.length && props.name === indicators[0]["name"]){value = data[0]["value"] + data[0]["value"]}
    else if (data.length && props.name === indicators[1]["name"]){value = data[1]["value"]}
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