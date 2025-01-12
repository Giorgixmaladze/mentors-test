#შევქმენით ფუნქცია სახელად anagram რომლის დანიშნულებაა დავადგინოთ უდრის თუარა პირველი სტრინგის სიგრძე მეორე სტრინგის სიგრძეს და ამასთანავე ვამოწმებთ არის თუარა მეორე სტრინგში პირველი სტრინგის თითოეული ასო თანაბარი რაოდენობით 

def anagram(st1,st2):
    return sorted(st1) == sorted(st2)

print(anagram("listen","silent"))
print(anagram("apple","pale"))
print(anagram("triangle","integral"))
print(anagram("a","a"))   
print(anagram("rat","car"))