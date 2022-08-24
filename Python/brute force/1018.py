import sys

N, M = map(int, sys.stdin.readline().split())

count = 0
data = []
def 체스판그리는녀석(i, j):
    if i % 2 == 0:
        if j % 2 == 0:
            return 'W'

        return 'B'

    if j % 2 == 0:
        return 'B'

    return 'W'


for i in range(N):
    data = sys.stdin.readline().split()
    print(data)
    print('')
    for j in range(M):
        print(j)
        # print(data[j])
        # print(체스판그리는녀석(i, j), end='')
