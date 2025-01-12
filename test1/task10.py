def anagram(strs):
    new_list =[]
    for i in strs:
        for s in range(len(i)):
            if i[s] in strs[i]:
                new_list.append(i)
            
    return new_list

    


print( anagram(["eat", "tea", "tan", "ate", "nat", "bat"]) )