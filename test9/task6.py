def numbers_sum(st):
    sum = 0
    for i in st:
        if i.isdigit():
            sum += int(i)
    return sum

print(numbers_sum("abc123xyz"))
print(numbers_sum("7 apples and 3 oranges"))
print(numbers_sum("no numbers" ))
print(numbers_sum("1a2b3c"))
print(numbers_sum("100 200" ))