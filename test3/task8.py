#შევქმენით ფუნქცია რომლის სახელიც არის smallest რომლის დანიშნულებაცაა ამოვიღოთ k-th პატარა რიცხვი სიიდან
def smallest(arr, k):
    arr = sorted(arr)
    return arr[k-1] 
    
print(smallest([3,2,1,5,6,4],2))
print(smallest([3,2,1,5,6,4],4))
print(smallest([7,10,4,3,20,15],3))
print(smallest([1,2,3,4,5],1))
print(smallest([1,2,3,4,5],5))