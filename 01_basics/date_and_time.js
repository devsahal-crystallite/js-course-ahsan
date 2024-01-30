const myDate = new Date()
console.log(myDate)

console.log(myDate.getFullYear())
console.log(myDate.toString())

myDate.toLocaleString('default', {
    weekday : 'narrow'
})