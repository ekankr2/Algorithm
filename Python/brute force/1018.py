import sys

N, M = map(int, sys.stdin.readline().split())

count = 0
data = ''


def 백부터그리는녀석(i, j):
    if i % 2 == 0:
        if j % 2 == 0:
            return 'W'

        return 'B'

    if j % 2 == 0:
        return 'B'

    return 'W'


def 흑부터그리는녀석(i, j):
    if i % 2 == 0:
        if j % 2 == 0:
            return 'B'

        return 'W'

    if j % 2 == 0:
        return 'W'

    return 'B'


for i in range(N):
    data = sys.stdin.readline().split()

    for j in range(M):
        if data[0][j] != 체스판그리는녀석(i, j):
            count += 1


print(count)