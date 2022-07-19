import sys

n = int(sys.stdin.readline())

def pivot(n):
    if n <= 1:
        return n

    return pivot(n - 1) + pivot(n - 2)

print(pivot(n))