import os
import numpy as np
import pandas as pd

BACKEND_DIR = os.path.abspath("")


def process_data(client: str, condition: str):
    """
    Reads, processes and outputs data in JSON format to pass to the `frontend`.

    Data is stored in the `Backend` in the `data` folder. Frontend issues a POST request
    to receive client's data for a specific disease. First, we check that the client exists,
    and that the disease exists within the client.

    Note: in production, the client will be significantly modified.

    :param client: Client name
    :param condition: Disease name
    :return: Data in JSON format for frontend
    """
    client_dir = os.path.join(BACKEND_DIR, f"data/{client}")
    assert os.path.exists(client_dir), f"Data not found for client {client}."

    condition_dir = os.path.join(client_dir, condition)
    assert os.path.exists(condition_dir), f"Data not found for client {client} with condition {condition}."

    print(f"---  Fetching data for client {client} with condition {condition}  ---")

    # Data
    barplot = pd.read_csv(os.path.join(condition_dir, "overtime.csv"))
    barplot_cost = pd.read_csv(os.path.join(condition_dir, "overtime_cost.csv"))
    lineplot = pd.read_csv(os.path.join(condition_dir, "relative_diff.csv"))
    pieplot_pop = pd.read_csv(os.path.join(condition_dir, "pie_pop.csv"))
    pieplot_onset = pd.read_csv(os.path.join(condition_dir, "pie_onset.csv"))
    lineplot_avg = pd.read_csv(os.path.join(condition_dir, "overall_average.csv"))
    table = pd.read_csv(os.path.join(condition_dir, "table.csv"))
    icd10_barplot = pd.read_csv(os.path.join(condition_dir, "med_month_before.csv"))
    rx_barplot = pd.read_csv(os.path.join(condition_dir, "rx_year_after.csv"))
    surgery_map = pd.read_csv(os.path.join(condition_dir, "map.csv"))

    # Select relevant observations & columns
    icd10_barplot = icd10_barplot.iloc[:30, :]
    rx_barplot = rx_barplot.iloc[:30, :]
    surgery_map = surgery_map.loc[:, ["state", "surgeries"]]

    # Format `claim` column for frontend display
    icd10_barplot['claim'] = icd10_barplot['claim'].apply(lambda x: x.title())
    rx_barplot['claim'] = rx_barplot['claim'].apply(lambda x: x.title())

    # Explanations
    explanation = pd.read_csv(os.path.join(BACKEND_DIR, f"data/Explanation/{condition}.csv"))

    # Sort columns (string dtype)
    columns = barplot.columns.sort_values()
    barplot = barplot.loc[:, columns]
    barplot_cost = barplot_cost.loc[:, columns]
    lineplot = lineplot.loc[:, columns]

    # Sort Pie data so that each row has `name` in the same order as `columns`
    # This is necessary because json response on the `frontend` automatically sorts keys of each dataframe
    # We want plots to have matching colors, so we sort each dataframe accordingly
    idxs = [np.where(columns == i)[0][0] for i in pieplot_onset["Class"]]
    pieplot_onset.index = idxs
    pieplot_onset.sort_index(inplace=True)

    outputs = {
        "data": {
            "barplot": barplot.to_dict(orient="records"),
            "barplot_cost": barplot_cost.to_dict(orient="records"),
            "pie_pop": pieplot_pop.to_dict(orient="records"),
            "pie_onset": pieplot_onset.to_dict(orient="records"),
            "lineplot": lineplot.to_dict(orient="records"),
            "avg_lineplot": lineplot_avg.to_dict(orient="records"),
            "table": table.to_dict(orient="records"),
            "icd10_barplot": icd10_barplot.to_dict(orient="records"),
            "rx_barplot": rx_barplot.to_dict(orient="records"),
            "surgery_map": surgery_map.to_dict(orient="records")
        },
        "explanation": explanation.to_dict(orient="records")
    }
    return outputs


if __name__ == '__main__':
    process_data("Company T", "Spine")
