import sys

N, M = map(int, sys.stdin.readline().split())
num_list = list(map(int, sys.stdin.readline().split()))
print(N, M)
print(num_list)

def black_jack(n, m, card_list):

    for i in card_list:

