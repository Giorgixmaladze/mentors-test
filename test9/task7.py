def pairs_sum(arr,num):
    l =[]
    for i in arr:
        for x in arr:
            if (i + x) == num:
                l.append((i,x))
        return l


print(pairs_sum([1,2,3,4],5)) 

print(pairs_sum([5,5,5],10)) 