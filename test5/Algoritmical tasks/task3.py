def rotate_arr(arr,k):
    return arr[-k:] + arr[:-k]
        

print(rotate_arr([1,2,3], 2))