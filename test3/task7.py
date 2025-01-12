# შევქმენით ფუნქცია სახელად prime _nums რომლის დანიშნულებაცაა დიაპაზონში მყოფი მარტივი რიცხვების ამოცნობა 
def prime_nums(start,end):
    #პირველ რიგში შევქმენით სია სახელად primes სადაც ჩავამატებთ ჩვენს მარტივ რიცხვებს
    primes = []

    #დავატრუალეთ for ციკლი და ავიღეთ დიაპაზონი start იდან end მდე
    for num in range(start,end):
        #შევამოწმეთ დიაპაზონში თითოეული რიცხვი მეტია თუ არა ერთზე შემდეგ თუ ჩვენი მდგომარეობა დააკმაყოფილებს პირობას გაეშვება ქვებით მოცემული ინსტრუქცია
        if num > 1:
            for i in range(2,num):
                if (num % i) == 0:
                    break
            else:
                primes.append(num)
    
    #ბოლოს კი ვაბრუნებთ ჩვენს შენახულ მარტივ რიცხვების სიას
    return primes

print(prime_nums(10,20))
print(prime_nums(1,10))
print(prime_nums(20,30))
print(prime_nums(24,25))
print(prime_nums(1,1))



