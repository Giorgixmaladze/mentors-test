const sum_of_integers = (num) =>{
    let sum = 0
    let x = 0
    let y = new Set(num.toString())


    num = y.toString()
    let s =""

    y.forEach(number =>{
        s += number
    })


    for(let i of s){
        sum += Number(i)
    }
    sum = sum.toString()
    while(sum.length > 1){
        for(let i of sum){
            x += Number(i)
        }
        sum = x
    }
    return sum
}
print(sum_of_integers(9999))
print(sum_of_integers(123))
print(sum_of_integers(0))
print(sum_of_integers(1))