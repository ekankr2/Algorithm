import sys

input = sys.stdin.readline()
a, b = map(int, input.split())

def compare(x, y):
    if x > y:
        return '>'

    if x < y:
        return '<'

    if x == y:
        return '=='


print(compare(a, b))
