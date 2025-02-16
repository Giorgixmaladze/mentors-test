def anagrams(s,p):
    return sorted(s) == sorted(p)

print(anagrams("srting","sdgags"))