def missing_int(arr):



    for i in range(len(arr)):
        if i>0 and i not in arr:
            return i
    
print(missing_int([4,5,6]))

