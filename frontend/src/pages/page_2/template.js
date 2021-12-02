import React from 'react';
import Header from "../../utilities/header";
import Menu from "../../utilities/menu";
import Table from "../../technicals/table";
import Papa from "papaparse";
import {dataURLs} from "../../utilities/constants";
import {tableName, tableDescription} from "./content";

const columns = [
  { field: 'id',
    headerName: 'Employee ID',
    width: 170 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 120,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 140,
  },
  {
    field: 'relation',
    headerName: 'Relation',
    width: 140,
  },
  {
    field: 'plan',
    headerName: 'Plan',
    width: 150,
  },
  {
    field: 'leafid',
    headerName: 'Leaf ID',
    description: 'Add description.',
    sortable: false,
    width: 300,
  }
];


function PageTwo(props) {
    const [parsedCsvData, setParsedCsvData] = React.useState([]);
      React.useEffect(() => {
        async function getData() {
          const response = await fetch(dataURLs[props.client]["table"])
          const reader = response.body.getReader()
          const result = await reader.read() // raw array
          const decoder = new TextDecoder('utf-8')
          const csv = decoder.decode(result.value) // the csv text
          const results = Papa.parse(csv,
              { header: true, complete: function(results) {
                  console.log("Finished:", results.data);
                  }}) // object with { data, errors, meta }
          const rows = results.data // array of objects
          setParsedCsvData(rows)
        }
        getData()
      }, [props.client])

    return(
        <div>
          <Header title={props.title} subtitle={props.subtitle} />
          <Menu client={props.client} setClient={props.setClient}/>
          <div className="font-inter font-extralight text-3xl text-gray-700 text-center mt-4 mb-1">
              {tableName}
          </div>
          <div className="font-inter font-extralight text-gray-600 text-base mx-16 text-justify">
              {tableDescription}
          </div>
          <div className="flex justify-center mx-16 my-6">
            <Table rows={parsedCsvData} columns={columns} pageSize={5} />
          </div>
        </div>
    )
}

export default PageTwo