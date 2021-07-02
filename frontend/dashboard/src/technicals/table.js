import "tailwindcss-font-inter";
import { DataGrid } from '@material-ui/data-grid';
import {makeStyles, createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

function Table(props){

    // `body2` corresponds to Table text-body.
    const THEME = createMuiTheme({
      typography: {
        "fontFamily": "inter",
        "fontSize": 14,
        useNextVariants: true,
        suppressDeprecationWarnings: true,
        body2: {
            "fontWeight": 300,
        },
        subtitle2: {
            "fontWeight": 700,
        }
      },
    });

    const tableWidth = (150 * props.columns.length) + 10
    const useStyles = makeStyles({
        dataGrid: {width: tableWidth.toString().concat("px"),
        }
    }
    );
    const classes = useStyles();

    return(
        <div className="flex overflow-auto">
            <div className="h-96 w-auto max-w-7xl">
                <MuiThemeProvider theme={THEME}>
                <DataGrid
                    rows={props.rows}
                    columns={props.columns}
                    pageSize={props.pageSize}
                    checkboxSelection
                    className={classes.dataGrid}
                />
                </MuiThemeProvider>
            </div>
        </div>
    )
}

export default Table
