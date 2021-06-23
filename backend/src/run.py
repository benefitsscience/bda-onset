import numpy as np
from typing import Optional
from model.linear_regression import LinearRegression


def run(l2_weight: Optional[float] = 0.3,
        seed: Optional[int] = 0):

    np.random.seed(seed)
    lr = LinearRegression().fit(l2_weight=l2_weight)
    return lr.pred_coeffs


if __name__ == '__main__':
    run()
