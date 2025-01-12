def arr_func(arr):
    num = 0
    for n in range(1,len(arr)):
        if arr[n-1] not in arr:
            num += arr[n]
    return num
print(arr_func([1,2,4,5]))