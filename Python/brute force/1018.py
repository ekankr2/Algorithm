import sys

N, M = map(int, sys.stdin.readline().split())

for i in range(N):
    print('')
    for j in range(M):
        # print(j, end='')

        if j % 2 == 1:
            print('B', end='')
            continue

        print('W', end='')