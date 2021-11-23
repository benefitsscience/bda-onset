// Text for each element of page 1

export const projectDescription = "The following graphs depict probabilities of ONSET for spine surgery " +
"within each company's at risk population over time, and relative differences with the universal average"+
 " calculated in the population at large (multi-company aggregation). In the general population of BST dataset,"+
 " the probability of a person requiring spine surgery in the next 12 months = 0.24% "

// List of dictionaries. Each entry corresponds to each indicator left to right
export const indicators = [
    {"name": "Total Population", "tooltip": "Number of registered members"},
    {"name": "Population At-Risk", "tooltip": "Number of members at risk of spine surgery"}
]

// List of strings - each is a title for the plot - left to right from top to bottom
export const chartTitles = [
    "Relative Difference with Universal Average",
    "Percentage of Spine Surgery by Risk Group",
    "Distribution of Spine Surgery",
    "Overall Probability of ONSET for Spine Surgery"
]

// Dict of dictionaries each one has description for one box with an `intro` and a `discussion`
export const plotDescriptions = {
        "lineBox":
            {
                "intro": "Relative differences of the Company's average probabilities compared to the universal"+
                " average probabilities in population at large depicted over time"
,
                "discussion": " "
        },
        "barBox":
            {
                "intro": "Fluctuation of Company's probabilities of ONSET depicted over time",
                "discussion": " "
            },
        "pieBox":
            {
                "intro": "Breakdown of the company's population at risk",
                "discussion": "Based on latest probabilities: AUGUST 2021"
            },
        "newBox":
            {
                "intro": "General probability of a person requiring spine surgery in the next 12 months ",
                "discussion": "note: In overall population of BST data set, the probability of a person requiring"+
                 " spine surgery in the next 12 months is 0.24% "
            }
    }