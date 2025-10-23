const house = {
  color: "gray",
  size: "100sqft",
  rooms: ["bedroom", "kitchen", "bathroom"],
};
house.color = "black";
house.numberOfFloors = 3;
// console.log(house.color)
// console.log(house)
// console.log(house['size'])
house.rooms.push("eating room");

const age = 16;
const name = "Bohdan";
const student = {
  name,
  age,
};
// console.log(student)

const pc = {
  color: "white",
  numberOfPlats: 2,
  components: ["motherboard", "culer", "videocard"],
  isOnSale: true,
};
// console.log(pc)

// console.log(pc.components)
pc.isOnSale = false;
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
  name: "Gym playlist",
  tracks: ["track 1", "track 2", "track 3"],
  rating: 9,
  changeName(newName) {
    this.name = newName;
  },
  addTrack(newTrack) {
    this.tracks.push(newTrack);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};
playlist.changeName("Home music");
playlist.addTrack("track 4");
playlist.updateRating(4);
// console.log(playlist)
playlist.getTrackCount();
// console.log(playlist.getTrackCount())

const shirt = {
  sizes: ["L", "M", "S"],
  color: "red",
  label: "Nike",
  reports: {
    good: 3,
    middle: 5,
    bad: 2,
  },
  changeLabel(newLabel) {
    this.label = newLabel;
  },
  checkSizes(size) {
    return this.sizes.includes(size);
  },
};
shirt.changeLabel("Adidas");
// console.log(shirt.checkSizes('L'))
// console.log(shirt)

// theme 12 / oct 14

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

// keys
const keys = Object.keys(feedback); //['good', 'neutral', 'bad']
// console.log(keys);

let totalFeedback = 0;
for (const key of keys) {
  totalFeedback += feedback[key];
//   console.log(key);
}

// values
const values = Object.values(feedback);
// console.log(values);

for (const value of values) {
  totalFeedback += value;
//   console.log(value);
}
// console.log(totalFeedback);

// entries
const entries = Object.entries(feedback);
// console.log(entries)
// console.log(feedback)

/*
 * Работа с колекцією (масивом об"ектів)
 */
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];
function findFriendByName(nameToFind, allFriends) {
  for (const {name} of allFriends) {
    if (name === nameToFind) {
      console.log("friend is finded");
      break;
    } else {
      console.log("friend is not finded");
    }
  }
}
findFriendByName('Mango', friends)

// oct 16

// Задачка разом
// 1
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps);
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// 2
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];

// const allScores = ;
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
console.log(bestScore);
console.log(worstScore);

// Функція getExtremeScores(scores)
// приймає масив оцінок (чисел) у параметрі scores.
// вона повертала об'єкт із двома властивостями:
// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().

getExtremeScores([89, 64, 42, 17, 93, 51, 26]); //{ best: 93, worst: 17 }
// getExtremeScores([19, 7, 4, 17, 81, 24]) //{ best: 81, worst: 4 }

function getExtremeScores(scores) {
  const bestScore = Math.max(...scores);
  const worstScore = Math.min(...scores);
  return {
    best: bestScore,
    worst: worstScore,
  };
}
console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

// console.log(c2);
// Розібрати приклад
const objA = {
  x: 1,
  y: 2,
};

const objB = {
  y: 3,
};

const result = {
  x: 5,
  ...objA,
  y: 10,
  ...objB,
  z: 15,
};
// console.log(result); // {// x: 1, // y: 3, // z: 15// }

// Задачка поєднати об,єкти
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};

const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {
  ...overrideSettings,
  ...defaultSettings,
};
// console.log(finalSettings);

// oct 21

// Об’єкт car
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  features: ['power windows', 'rear camera', 'navigation'],
  safety: {
    airbags: true,
    antilock_brakes: true,
    stability_control: true
  }
}
const {make, model, year, safety:{airbags}, features:[, , navigation]} = car
// console.log(make, model, year, navigation, airbags);

// const [pw, rc, navig] = features
// console.log(pw, rc, navig);


// Об’єкт user
const user = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
}

const {name: userName, age: userAge, email} = user
// console.log(userName, userAge, email);

// Об’єкт movie
const movie = {
  title: 'The Shawshank Redemption',
  director: {
    name: 'Frank Darabont',
    nationality: 'American'
  },
  actors: ['Tim Robbins', 'Morgan Freeman'],
  release_year: 1994,
  ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90
  }
}

// const {title, release_year, director, director:{nationality}, actors, ratings} = movie
// console.log(title, release_year, director, nationality, actors, ratings);

// const [, Morgan] = actors
// console.log(Morgan);


// Об’єкт books
const books = {
  count: 3,
  list: [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960
    },
    {
      title: '1984',
      author: 'George Orwell',
      year: 1949
    }
  ]
}

const {count} = books
console.log(count)

const [{title}, book2, book3] = books.list
// console.log(title1, book2);
// const {title} = book1
console.log(title);

// Дано масив об’єктів
const newFriends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];

// Написати функцію яка буде повертати масив всіх імен друзів
const getAllNames = function(arr){
  let arrayAllFriends = []
  for (const friend of arr) {
    let friendName = friend.name
    console.log(friendName);
    arrayAllFriends.push(friendName)
  }
  return arrayAllFriends
}
console.log(getAllNames(newFriends));

// Написати функ,яка буде повертати масив імен друзів які онлайн
const getOnlineFriends = function(arr){
  let arrayAllFriendsOnline = []
  for (const {name, online} of arr) {
    if(online){
      arrayAllFriendsOnline.push(name)
    }
  }
  return arrayAllFriendsOnline
}
console.log(getOnlineFriends(newFriends));

// Написати функцію яка буде повертати масив імен друзів які офлайн
// console.log(getOfflineFriends(friends));
