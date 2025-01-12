#შევქმენით ფუნქცია caesar_cipher
def caesar_hiper(text, num):
    # შევქმენით recult ცვლაი რომელიც არის ცარიელი სტრინგი სადაც შეინახება საბოლოო შედეგი
    result = ''
    for i in text:
        #ვამოწმებთ ანუ არის თუ არა ჩვენი ელემენტი ანბანის რმელიმე ასო
        if i.isalpha():
            #ვადგენთ დიდი ასოა თუ პატარა
            char = 'A' if i.isupper() else 'a'
            result += chr((ord(i) - ord(char) + num)% 26 + ord(char))
        else:
            #თუ სიმბოლო არ არის ასო მაშინ პირდაპირ ვამატებთ შედეგს
            result += i
        #ბოლოს კი ვაბრუნებთ ჩვენს შედეგს
    return result


        
