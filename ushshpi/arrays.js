let bashkesi = [1, 43, "klasa"]
console.log(bashkesi.length)

let arr = [2, 4, 6, 8, 10]
arr.shift()
console.log(arr)

arr.unshift(false)
console.log(arr)

arr.pop()
console.log(arr)

arr.push(false)
console.log(arr)

//metoda splice
let array = ["k", 12, "a", 31, 16]
array.splice(0, 2, "o", "p")
console.log(array)

//metoda slice
let array2 = [1, 4, 19, "w", "r"]
let result = array2.slice(2, 5)
console.log(result)

//metoda concat
let resultat = array.concat(array2)
console.log(resultat)