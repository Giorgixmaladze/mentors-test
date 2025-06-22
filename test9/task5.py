def armstrong(num):
    sum = 0
    num = str(num)
    
    for i in num:
        sum += int(i) ** 3
    return sum == int(num)

print(armstrong(153))
print(armstrong(370))
print(armstrong(9474))
print(armstrong(10))
print(armstrong(1))