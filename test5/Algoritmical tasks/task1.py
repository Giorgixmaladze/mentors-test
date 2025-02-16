def majority_element(arr):
    n = len(arr)

    for i in arr:
        if arr.count(i) > n // 2:
            return i
    return None

print(majority_element([1,2,3,2,2]))
print(majority_element([10,20,10,10,20]))