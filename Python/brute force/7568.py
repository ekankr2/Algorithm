import sys

N = int(sys.stdin.readline())

student_list = []

x_arr = []
y_arr = []

for i in range(N):
    weight, height = map(int, sys.stdin.readline().split())
    student_list.append((weight, height))

print(student_list[0])