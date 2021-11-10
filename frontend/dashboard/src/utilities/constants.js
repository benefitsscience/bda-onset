import ET_pie1 from "../data/Energy Transfer/E-Transfer Pie1.csv"
import ET_pie2 from "../data/Energy Transfer/E-Transfer Pie2.csv"
import ET_line from "../data/Energy Transfer/E-Transfer barplot.csv"
import ET_bar from "../data/Energy Transfer/E-Transfer lineplot.csv"
import ET_table from "../data/Energy Transfer/table.csv"

export const clientNames = [
    "Energy Transfer",
    "Thorind",
    "LabCorp"
]


export const menuOptions = [
    "Insight",
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
    '#FFCD73'
]


export const onsetColors = [
    "#AFDDD5",
    '#FFA700',
    '#FFCCCD',
    '#64864A'
]


export const dataURLs = {
        "Energy Transfer": {"pie1": ET_pie1, "pie2": ET_pie2, "line": ET_line, "bar": ET_bar, "table": ET_table},
        "Thorind": {"pie1": ET_pie1, "pie2": ET_pie2, "line": ET_line, "bar": ET_bar, "table": ET_table},
        "LabCorp": {"pie1": ET_pie1, "pie2": ET_pie2, "line": ET_line, "bar": ET_bar, "table": ET_table},
    }
