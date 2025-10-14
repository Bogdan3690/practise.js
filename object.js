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
// console.log(shirt.checkSizes('L'))
// console.log(shirt)

// iteration object, 14

// let totalFeedback = 0;

// const keys = Object.keys(feedback); //['good', 'neutral', 'bad']

// for (const key of keys) {
//   console.log(key); //'good', 'neutral', 'bad'
//   totalFeedback += feedback[key];
// }


const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const values = Object.values(feedback)
console.log(values)

let totalFeedback = 0;

for (const value of values) {
    totalFeedback += value

// console.log(value)
}

// console.log(totalFeedback);

const entries = Object.entries(feedback)
// console.log(entries)

/*
 * Работа с колекцією (масивом об"ектів)
 */
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
];
    function findFriendByName(nameToFind, allFriends){
        for (const friend of allFriends) {
            if (friend.name === nameToFind) {
                console.log('friend is finded')
                break
            } else {
                console.log('friend is not finded')
            }
}
    }
    findFriendByName('Mango', friends)