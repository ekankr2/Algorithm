import sys
input = int(sys.stdin.readline())

for i in range(9):
    print('{} * {} = {}'.format(input, i+1, (i+1)*input))
