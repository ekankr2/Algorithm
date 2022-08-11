N = int(input())


def constructor(n):
    for i in range(1, n + 1):
        hundred = i // 100
        ten = i % 100 // 10
        one = i % 10

        print(i + hundred + ten + one, i)

        if (i + hundred + ten + one) == n:
            return i

    return 0


print(constructor(N))
