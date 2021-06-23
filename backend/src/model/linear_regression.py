import numpy as np


def generate_linear_data(n_obs, n_dims):
    """Generates data points to fit a linear regression model.

    Args:
        n_obs: An integer representing the number of observations.
        n_dims: An integer representing the number of features.

    Returns:
        The true coefficients from which data was generated, X of shape [n_obs, n_dims], Y of shape [n_obs].

    """
    assert n_obs > 0 and n_dims > 0, 'Data needs to be at least one dimensional.'
    coeffs = np.random.uniform(-10, 10, n_dims)

    # We generate X from a Gaussian distribution, y to fit coeffs and add random noise in [0, 1]
    X = np.random.normal(0, 5, size=(n_obs, n_dims))
    noise = 2 * np.random.random_sample(n_obs) - 1
    y = X @ coeffs + noise

    return coeffs, X, y


class LinearRegression:
    def __init__(self):

        # Initialize problem
        self.n_obs = 20
        self.n_dims = 3
        self.pred_coeffs = np.empty(shape=self.n_dims, dtype=np.float32)
        self.true_coeffs, self.X, self.y = generate_linear_data(self.n_obs, self.n_dims)

    def fit(self, l2_weight):
        """Solves Ridge Regression in closed form => B = inverse(X'X - kI) X'y.

        Args:
            l2_weight: A float representing the amount of L2 regularization.

        Returns: An array of fitted coefficients.

        """
        coeffs = np.linalg.inv(
            self.X.T @ self.X - l2_weight * np.identity(self.n_dims)
        ) @ (self.X.T @ self.y)

        self.pred_coeffs = coeffs
        return self


if __name__ == '__main__':
    np.random.seed(0)

    lr = LinearRegression().fit(0.3)
    print('True coeffs: ', lr.true_coeffs)
    print('Pred coeffs: ', lr.pred_coeffs)
