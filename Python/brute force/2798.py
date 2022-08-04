import sys
from itertools import combinations

N, M = map(int, sys.stdin.readline().split())
num_list = list(map(int, sys.stdin.readline().split()))


def black_jack(n, m, card_list):
    closest_sum = 0

    for i in combinations(card_list, 3):
        temp_sum = sum(i)
        if temp_sum == m:
            closest_sum =



black_jack(N, M, num_list)
