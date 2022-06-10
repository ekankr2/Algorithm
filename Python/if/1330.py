import sys

a, b = sys.stdin.readline().split()


def compare(x, y):
    if x > y:
        return '>'

    if x < y:
        return '<'

    if x == y:
        return '=='


print(compare(a, b))
