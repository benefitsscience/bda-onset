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
        <div className="flex overflow-auto">
            <div className="h-96 w-auto max-w-7xl">
                <DataGrid
                    rows={props.rows}
                    columns={props.columns}
                    pageSize={props.pageSize}
                    checkboxSelection
                    className={classes.dataGrid}
                />
            </div>
        </div>
    )
}

export default Table
