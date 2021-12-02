import os
import pandas as pd

BACKEND_DIR = os.path.abspath("../")


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

    outputs = {
        "barplot": pd.read_csv(os.path.join(condition_dir, "barplot.csv")).to_json(orient="records"),
        "pie_pop": pd.read_csv(os.path.join(condition_dir, "pie_pop.csv")).to_json(orient="records"),
        "pie_onset": pd.read_csv(os.path.join(condition_dir, "pie_onset.csv")).to_json(orient="records"),
        "lineplot": pd.read_csv(os.path.join(condition_dir, "lineplot.csv")).to_json(orient="records"),
        "avg_lineplot": pd.read_csv(os.path.join(condition_dir, "avg_lineplot.csv")).to_json(orient="records"),
        "table": pd.read_csv(os.path.join(condition_dir, "pie_pop.csv")).to_json(orient="records")
    }
    return outputs


if __name__ == '__main__':
    process_data("Thorind", "spine")
