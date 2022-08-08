import sys
from itertools import combinations

N, M = map(int, sys.stdin.readline().split())
num_list = list(map(int, sys.stdin.readline().split()))


def black_jack(n, m, card_list):
    closest_sum = 0

    for cards in combinations(card_list, n):
        if sum(cards) <= m:
            closest_sum = max(closest_sum, sum(cards))

        return closest_sum



print(black_jack(N, M, num_list))
