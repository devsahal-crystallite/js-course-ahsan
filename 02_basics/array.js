console.log(`Hello this is and Array Related Topic`)

const Arr1 = [12, 0, 145, 842, "Ahsan", "Sahal", "Array"]
const Arr2 = Arr1.push("Crystallite")
// console.log(Arr1)
// console.log(Arr1.slice(0, 4)) // ye slice krdeta ha array ko k hmen kitne number ya fields show krwani hain
// console.log(Arr2)
// console.log(Arr2.toPrecision(1))

const marvel_heroes = ['Ironman', 'Captian America', 'Antman']
const dc_heroes = ['Superman', 'Batman', 'Wonder Women']

const all_heroes = marvel_heroes.concat(dc_heroes) //  this is used for join the multiple arrays 
// console.log(all_heroes)

const arr3 = [1, 2, 4, 5, 6, [7, 8, 9, 10, 11], 12, 13, [14, 15, 16, [17, 18, 19, 20]]] // Join the Multiple Inter Dimensional Array
// console.log(arr3.flat(Infinity))

console.log(Array.isArray('Ahsan Sahal')) //  checking the array either is true or false
console.log(Array.from('Ahsan Sahal'))


// convert value in Array
const rank1 = "1st"
const rank2 = "2nd"
const rank3 = "3rd"

console.log(Array.of(rank1, rank2, rank3)) // convert values in array