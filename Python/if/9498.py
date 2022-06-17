import sys
input = int(sys.stdin.readline())

def grade(input):
    if input >= 90:
        return 'A'

    if input >= 80:
        return 'B'

    if input >= 70:
        return 'C'

    if input >= 60:
        return 'D'

    return 'F'

print(grade(input))
