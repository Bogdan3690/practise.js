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
// console.log(pc)

// console.log(pc.components)
pc.isOnSale = false
// console.log(pc.isOnSale)
// console.log(pc.components.push('proccesor'))

// lesson 2

/*
 * Методи об"екту і this при звернені до властивостей в методах
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
    name: 'Gym playlist',
    tracks: ['track 1', 'track 2', 'track 3'],
    rating: 9,
    changeName(newName){
        this.name = newName
    },
    addTrack(newTrack){
        this.tracks.push(newTrack)
    },
    updateRating(newRating){
        this.rating = newRating
    },
    getTrackCount(){
        return this.tracks.length
    }
}
playlist.changeName('Home music')
playlist.addTrack('track 4')
playlist.updateRating(4)
console.log(playlist)
playlist.getTrackCount()
console.log(playlist.getTrackCount())

const shirt = {
    sizes: ['L', 'M', 'S'],
    color: 'red',
    label: 'Nike',
    reports: {
        good: 3,
        middle: 5,
        bad: 2,
    },
    changeLabel(newLabel){
        this.label = newLabel
    },
    checkSizes(size){
        return this.sizes.includes(size)
    }
}
shirt.changeLabel('Adidas')
console.log(shirt.checkSizes('L'))
console.log(shirt)