def mean(arr1,arr2):
    arrs = arr1 + arr2
    sum_arrs = sum(arrs)
    return sum_arrs / (len(arrs))

print(mean([1, 2, 3], [4, 5, 6]))