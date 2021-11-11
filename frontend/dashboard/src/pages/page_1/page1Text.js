// Text for each element of page 1

export const projectDescription = "Add a description of the indicators or briefly " +
"explain the purpose of the Insight section."

// List of dictionaries. Each entry corresponds to each indicator left to right
export const indicators = [
    {"name": "Total Population", "tooltip": "Number of registered members"},
    {"name": "Population At-Risk", "tooltip": "Number of members at risk of spine surgery"}
]

// List of strings - each is a title for the plot - left to right from top to bottom
export const chartTitles = [
    "Relative Difference in Spine Surgery",
    "Percentage of Spine Surgery by Risk Group",
    "Distribution of Spine Surgery",
    "Additional Plot"
]

// Dict of dictionaries each one has description for one box with an `intro` and a `discussion`
export const plotDescriptions = {
        "lineBox":
            {
                "intro": "Add concise description of the plot, and/or explanation of interactive sliders, buttons etc.",
                "discussion": "This is some extra space to draw conclusions, or give recommendations."
        },
        "barBox":
            {
                "intro": "Add concise description of the plot, and/or explanation of interactive sliders, buttons etc.",
                "discussion": "This is some extra space to draw conclusions, or give recommendations."
            },
        "pieBox":
            {
                "intro": "Add concise description of the plot, and/or explanation of interactive sliders, buttons etc.",
                "discussion": "This is some extra space to draw conclusions, or give recommendations."
            },
        "newBox":
            {
                "intro": "Add concise description of the plot, and/or explanation of interactive sliders, buttons etc.",
                "discussion": "This is some extra space to draw conclusions, or give recommendations."
            }
    }