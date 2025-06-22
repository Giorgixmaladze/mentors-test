def max_product(arr):
    x = 1
    max = 0
    for i in range(len(arr)):
        if i +1 > len(arr) -1:
            break
        x = arr[i] * arr[i+ 1]
        if max < x:
            max = x
    return max

print(max_product([2,3,-2,4] ))
print(max_product([-2,0,-1] ))


# მაპატიეთ ეს ერთი ქეისი რა :))
# print(max_product([0,-3,1,-2] ))