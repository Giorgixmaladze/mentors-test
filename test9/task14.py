def XOR(arr):
    xor = 0
    x = 0
    for i in arr:
        for y in arr:
            xor = i ^ y
            if x < xor:
                x = xor
    return x

print(XOR([3, 10, 5, 25, 2, 8] ))
print(XOR([8,10,2]))
print(XOR([12, 15, 7, 9] ))
print(XOR([2, 4] ))