def list_to_dict(arr):
    d = {}
    for i in arr:
        d[i[0]] = i[1]
    return d
    
print(list_to_dict([('a', 1), ('b', 2)] ))
    
print(list_to_dict([]))   

print([('one', 1), ('two', 2)] )
print(list_to_dict([('x', 10)] ) )
