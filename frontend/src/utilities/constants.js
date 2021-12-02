import ET_pie1 from "../../../../backend/data/Energy Transfer/pie_pop.csv"
import ET_pie2 from "../../../../backend/data/Energy Transfer/pie_onset.csv"
import ET_line from "../../../../backend/data/Energy Transfer/lineplot.csv"
import ET_line1 from "../../../../backend/data/Energy Transfer/avg_lineplot.csv"
import ET_bar from "../../../../backend/data/Energy Transfer/barplot.csv"
import ET_table from "../../../../backend/data/Energy Transfer/table.csv"
import L_pie1 from "../../../backend/data/LabCorp/spine/pie_pop.csv"
import L_pie2 from "../../../backend/data/LabCorp/spine/pie_onset.csv"
import L_line from "../../../backend/data/LabCorp/spine/lineplot.csv"
import L_line1 from "../../../backend/data/LabCorp/spine/avg_lineplot.csv"
import L_bar from "../../../backend/data/LabCorp/spine/barplot.csv"
import L_table from "../../../backend/data/LabCorp/spine/table.csv"
import T_pie1 from "../../../backend/data/Thorind/spine/pie_pop.csv"
import T_pie2 from "../../../backend/data/Thorind/spine/pie_onset.csv"
import T_line from "../../../backend/data/Thorind/spine/lineplot.csv"
import T_line1 from "../../../backend/data/Thorind/spine/avg_lineplot.csv"
import T_bar from "../../../backend/data/Thorind/spine/barplot.csv"
import T_table from "../../../backend/data/Thorind/spine/table.csv"

export const clientNames = [
    "Energy Transfer",
    "Thor Industries",
    "LabCorp"
]


export const menuOptions = [
    "ONSET Insights",
    "Data",
    "Research",
    "Contact"
]


export const headerSubtitles = [
    "Leverage machine learning and optimization",
    "The fuel to our models",
    "The maths behind it all",
    "Drop us a message"
]


export const contactDetails = [
    {
        "name": "Omid Nohadani, Ph.D",
        "website": "http://users.iems.northwestern.edu/~nohadani/",
        "title": "Data Science Lead",
        "phone": "+1 (123) 456-7890",
        "email": "info@benefitsscience.com"
    }
]


export const popColors = [
    '#685268',
    '#FFA23A'
]


export const onsetColors = [
    "#00A5E3",
    '#FC6238',
    '#C05780',
    '#00CDAC'
]


export const dataURLs = {
        "Energy Transfer": {"pie1": ET_pie1, "pie2": ET_pie2, "line": ET_line,
            "line1": ET_line1, "bar": ET_bar, "table": ET_table},
        "Thor Industries": {"pie1": T_pie1, "pie2": T_pie2, "line": T_line,
            "line1": T_line1, "bar": T_bar, "table": T_table},
        "LabCorp": {"pie1": L_pie1, "pie2": L_pie2, "line": L_line,
            "line1": L_line1, "bar": L_bar, "table": L_table},
    }
