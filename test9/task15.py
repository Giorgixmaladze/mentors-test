
def smaller_after_self(arr):
    l = []

    for i in range(len(arr)):
        count = 0 
        num = arr[i]

        for x in range(i + 1, len(arr)):
            if arr[x] < num:
                count += 1
        l.append(count)

    return l