import matplotlib.pyplot as plt
import numpy as np


def add_noise(arr, layers):
    n = len(arr)
    for i in layers:
        arr = arr + np.random.normal(0, i, n)
    return arr


n = 64
layers = [2**i for i in range(3)]
x = np.array(range(0, n))
A = add_noise(np.array(range(0, n)), layers)
B = add_noise(np.array(range(0, n)[::-1]), layers)

plt.title("Temperature vs. 'Movement'")
plt.scatter(32, 28, c="r", s=100, label="Intersection Point")
plt.plot(x, A, label="Cold Start")
plt.plot(x, B, label="Warm Start")
plt.legend()
plt.xlabel("Movement")
plt.ylabel("Temperature")
plt.show()
