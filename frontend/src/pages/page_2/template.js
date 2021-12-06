import React from 'react';
import Header from "../../utilities/header";
import Menu from "../../utilities/menu";
import Table from "../../technicals/table";
import {content} from "./content";

const columns = [
  { field: 'id',
    headerName: 'Employee ID',
    width: 170 },
  {
    field: 'Age',
    headerName: 'Age',
    type: 'number',
    width: 120,
  },
  {
    field: 'Gender',
    headerName: 'Gender',
    width: 140,
  },
  {
    field: 'Relation',
    headerName: 'Relation',
    width: 170,
  },
  {
    field: 'Probability',
    headerName: 'Probability',
    width: 140,
  },
  {
    field: 'Reason',
    headerName: 'Reason',
    description: '',
    sortable: false,
    width: 350,
  }
];


function PageTwo(props) {
    const info = content[props.condition]
    return(
        <div>
          <Header title={info["title"]} subtitle={info["subtitle"]} />
          <Menu
              client={props.client}
              setClient={props.setClient}
              condition={props.condition}
              setCondition={props.setCondition}
          />
          <div className="font-inter font-extralight text-3xl text-gray-700 text-center mt-4 mb-1">
              {info["tableName"]}
          </div>
          <div className="font-inter font-extralight text-gray-600 text-base mx-16 text-justify">
              {info["description"]}
          </div>
          <div className="flex justify-center mx-16 my-6">
            <Table rows={props.data} columns={columns} pageSize={5} />
          </div>
        </div>
    )
}

export default PageTwo
