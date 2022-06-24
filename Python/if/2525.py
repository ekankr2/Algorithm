import sys
hour, min = map(int, sys.stdin.readline().split())
needed_min = int(sys.stdin.readline())

hour += needed_min // 60
min += needed_min % 60

if min >= 60:
    hour += 1
    min -= 60

if hour >= 24:
    hour -= 24


print(hour, min)

