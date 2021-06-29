import { DataGrid } from '@material-ui/data-grid';

function Table(props){
    return(
        <div className="h-96 w-6/6 m-6">
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                pageSize={props.pageSize}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default Table
