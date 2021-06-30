import { DataGrid } from '@material-ui/data-grid';
import {makeStyles } from '@material-ui/core/styles';

function Table(props){

    const tableWidth = (150 * props.columns.length) + 10
    const useStyles = makeStyles({
        dataGrid: {width: tableWidth.toString().concat("px"),

        }
    });
    const classes = useStyles();

    return(
        <div className="h-96 w-auto max-w-7xl m-6">
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                pageSize={props.pageSize}
                checkboxSelection
                className={classes.dataGrid}
            />
        </div>
    )
}

export default Table
