import sys

N = int(sys.stdin.readline())

x_arr = []
y_arr = []

for i in range(N):
    x, y = map(int, sys.stdin.readline().split())
    x_arr.append(x)
    y_arr.append(y)

print(x_arr)
print(y_arr)