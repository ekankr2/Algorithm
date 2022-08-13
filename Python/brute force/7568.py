import sys

N = int(sys.stdin.readline())

student_list = []

for i in range(N):
    weight, height = map(int, sys.stdin.readline().split())
    student_list.append((weight, height))

for j in student_list:
    rank = 1
    for k in student_list:
        if j[0] < k[0] and j[1] < k[1]:
            rank += 1

    print(rank, end=' ')


