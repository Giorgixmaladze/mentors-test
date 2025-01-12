#შევქმენით ფუნქცია სახელად uniq_words რომლის დანიშნულებაცაა დაითვალოს უნიკალური ასოების რაოდენობა სტრინგში
def uniq_words(text):
    #split()მეთოდის გამოყენებით გავხლიჩეთ ჩვენი ტექსტი 
    words = text.split()
    #შემდეგ word სიაში ყველა სტრინგის ასო გადავაქციეთ პატარა ასოდ
    words = [word.lower() for word in words]

    #შემდეგ set ფუნქციის საშუალებით ამოვიღეთ დუბლიკატი ასოები და დავაბრუნეთ საბოლოოდ ამ ასოების რაოდენობა
    uniq_words = set(words)
    return (len(uniq_words))


print(uniq_words("The quick brown fox jumps over the lazy dog"))
print(uniq_words("Hello hello world"))
print(uniq_words(""))
print(uniq_words("Python is fun. Python is cool"))
print(uniq_words("One word"))