N = int(input())


def constructor(n):
    for i in range(n):
        sum_i = sum(list(map(int, str(i))))

        if (i + sum_i) == N:
            return i

    return 0


print(constructor(N))
