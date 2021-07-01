import React from 'react';
import Header from "../../utilities/header";
import Menu from "../../utilities/menu";
import Table from "../../technicals/table";

const columns = [
  { field: 'id',
    headerName: 'ID',
    width: 100 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



function PageTwo(props) {
    return(
        <div>
          <Header title={props.title} subtitle={props.subtitle} />
          <Menu />
          <div className="font-inter font-extralight text-3xl text-gray-700 text-center mt-4 mb-1">
            Table Name
          </div>
          <div className="font-inter font-extralight text-gray-600 text-base mx-16 text-justify">
            Add a description of the dataset, and/or include details about the columns and their dtype.
          </div>
          <div className="flex justify-center mx-16 my-6">
            <Table rows={rows} columns={columns} pageSize={5} />
          </div>
        </div>
    )
}

export default PageTwo