#შევქმენით ფუნქცია სახელად xbonacci და გადავეცით ორი პარამეტრი x და num
def xbonacci(x, num):
    
    list = [1] * x

    #sum ცვლადში შევინახეთ x ჯამი
    sum = sum(list)

    #დავატრიალეთ for ციკლი x დან num მდე
    for i in range(x, num):
        #შემდეგ კი starting სიაში ჩავამატეთ ჩვენი ჯამი
        list.append(sum)

        sum += list[-1] - list[i - num]

    
    return list[:num]


print(xbonacci(2, 10))
