
#შევქმენით ფუნქცია სახელად reverse_order რომლის დანიშნულებაცაა რომ შემოვაბრუნოთ სტრიქონები
def reverse_order(st):
    #პირველ რიგში გავხლიჩეთ სტრინგი space ებზე და შეინახება თითოული სტრიქონი უკვე სიაში 
    st = st.split(" ")

    #ბოლოს კი დავაბრუნეთ ჩვენი შემოტრიალებული სია უკვე და თან გადავაქციეთ სტრინგად
    return " ".join(st[::-1])



print(reverse_order("Hello World"))
print(reverse_order("Python is great"))
print(reverse_order("a b c"))
print(reverse_order(""))
print(reverse_order("spaces"))