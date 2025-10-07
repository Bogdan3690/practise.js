const house = {
    color: 'gray',
    size: '100sqft',
    rooms: ['bedroom', 'kitchen', 'bathroom'],
}
house.color = "black"
house.numberOfFloors = 3
// console.log(house.color)
// console.log(house)
// console.log(house['size'])
house.rooms.push('eating room')

const age = 16
const name = 'Bohdan'
const student = {
    name,
    age
}
// console.log(student)

const pc = {
    color: 'white',
    numberOfPlats: 2,
    components: ['motherboard', 'culer', 'videocard'],
    isOnSale: true
}
console.log(pc)

console.log(pc.components)
pc.isOnSale = false
console.log(pc.isOnSale)
console.log(pc.components.push('proccesor'))