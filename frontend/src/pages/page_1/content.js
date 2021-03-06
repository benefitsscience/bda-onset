// Text for each element of page 1

export const content = {

    "Spine": {
        title: "ONSET Insights",

        subtitle: "Leverage machine learning and optimization",

        description: "The following graphs depict probabilities of ONSET for spine surgery " +
            "within each company's at risk population over time, and relative differences " +
            "with the universal average calculated in the population at large (multi-company aggregation). " +
            "In the general population of BST dataset, the probability of a person " +
            "requiring spine surgery in the next 12 months = 0.24%",

        indicators: [
            {"name": "Total Population", "tooltip": "Number of registered members"},
            {"name": "Population At-Risk", "tooltip": "Number of members at risk of spine surgery"},
            {"name": "Expected Cost", "tooltip": "Expected cost for members at risk of hip & knee surgery"}
        ],

        boxTitles: [
            "Relative Difference with Universal Average",
            "Percentage of Spine Surgery by Risk Group",
            "Distribution of Spine Surgery",
            "Overall Probability of ONSET for Spine Surgery",
            <p>Frequency of ICD-10 claims <b>before</b> Spine Surgery</p>,
            <p>Frequency of Rx claims <b>after</b> Spine Surgery</p>,
            "Distribution of Spine surgeries across the US"
        ],

        boxDescription: [
            {"intro": "Relative differences of the Company's average probabilities compared to the universal" +
                    " average probabilities in population at large depicted over time",
            "discussion": " "},
            {"intro": "Fluctuation of Company's probabilities of ONSET depicted over time",
            "discussion": " "},
            {"intro": "Breakdown of the company's population at risk",
            "discussion": "Based on latest probabilities: AUGUST 2021"},
            {"intro": "General probability of a person requiring spine surgery in the next 12 months ",
            "discussion": "Note: in overall population of BST data set, the probability of a person requiring" +
                " spine surgery in the next 12 months is 0.24% "},
            {"intro": "Percentage of ICD-10 claims in the month prior to spine surgery",
            "discussion": " "},
            {"intro": "Percentage of Rx claims in the year following spine surgery",
            "discussion": " "},
            {"intro": "Number of spine surgeries in the United States",
            "discussion": " "},
        ]
    },

    "Hip & Knee": {
        title: "ONSET Insights",

        subtitle: "Leverage machine learning and optimization",

        description: "The following graphs depict probabilities of ONSET for hip & knee surgery " +
            "within each company's at risk population over time, and relative differences " +
            "with the universal average calculated in the population at large (multi-company aggregation). " +
            "In the general population of BST dataset, the probability of a person " +
            "requiring hip & knee surgery in the next 12 months = 0.47%",

        indicators: [
            {"name": "Total Population", "tooltip": "Number of registered members"},
            {"name": "Population At-Risk", "tooltip": "Number of members at risk of hip & knee surgery"},
            {"name": "Expected Cost", "tooltip": "Expected cost for members at risk of hip & knee surgery"}
        ],

        boxTitles: [
            "Relative Difference with Universal Average",
            "Percentage of Hip & Knee Surgery by Risk Group",
            "Distribution of Hip & Knee Surgery",
            "Overall Probability of ONSET for Hip & Knee Surgery",
            <p>Frequency of ICD-10 claims <b>before</b> Hip & Knee Surgery</p>,
            <p>Frequency of Rx claims <b>after</b> Hip & Knee Surgery</p>,
            "Distribution of Hip & Knee surgeries across the US"
        ],

        boxDescription: [
            {"intro": "Relative differences of the Company's average probabilities compared to the universal" +
                    " average probabilities in population at large depicted over time",
            "discussion": " "},
            {"intro": "Fluctuation of Company's probabilities of ONSET depicted over time",
            "discussion": " "},
            {"intro": "Breakdown of the company's population at risk",
            "discussion": "Based on latest probabilities: AUGUST 2021"},
            {"intro": "General probability of a person requiring hip & knee surgery in the next 12 months ",
            "discussion": "Note: in overall population of BST data set, the probability of a person requiring" +
                " hip & knee surgery in the next 12 months is 0.47% "},
            {"intro": "Percentage of ICD-10 claims in the month prior to spine surgery",
            "discussion": " "},
            {"intro": "Percentage of Rx claims in the year following spine surgery",
            "discussion": " "},
            {"intro": "Number of spine surgeries in the United States",
            "discussion": " "}
        ]
    }
}