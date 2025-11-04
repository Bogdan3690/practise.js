// 1
// Доповни виклик метода forEach, передавши йому колбек-функцію, 
// яка на кожній ітерації додає до total 
// значення поточного елемента масива items.

const calculateTotal = function (items) {
  let total = 0;
  items.forEach(item => {total += item});
  
  return total;
}
// console.log(calculateTotal([12, 85, 37, 4])); //повертає 138
// console.log(calculateTotal([164, 48, 291])); //повертає 503

const planets = ["Earth", "Mars", "Venus", "Jupiter"];


const planetsInUpperCase = planets.map(p => p.toUpperCase());
const planetsLenght = planets.map(p => p.length)
//     console.log(planetsLenght)
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]



const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// Використовуючи 👆 масив об’єктів виконай наступні завдання:
//map()
// Отримати масив імен всіх гравців
const playersNames = players.map(player => player.name)
console.log(playersNames);
// Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
const playersPoints = players.map(player => ({...player, points: Math.round(player.points * 1.1)}))
console.log(playersPoints);
// Збільшити кількість годин гравця по id. Переписати на тернарник
//filter()
// Отримати масив всіх гравців онлайн
const playersOnline = players.filter(player => player.online).map(player => player.name)
console.log(playersOnline);
// Отримати масив всіх гравців офлайн
const playersOffline = players.filter(player => !player.online).map(player => player.name)
console.log(playersOffline);
// Отримати масив всіх хардкорних гравців з часом більше 250
const theBestPlayers = players.filter(player => player.timePlayed > 250).map(player => player.name)
console.log(theBestPlayers);
//Find()
// Знайти гравця по id
const playerById = players.find(player => player.id === 'player-3')
console.log(playerById);
// Знайти гравця по імені
const playerByName = players.find(player => player.name === 'Kiwi')
console.log(playerByName);
//every()
// Перевірити чи всі гравці мають час більше 200
const isAllGoodPlayers = players.every(player => player.timePlayed >= 200)
console.log(isAllGoodPlayers);
// Перевірити чи всі гравці онлайн
const isAllPlayersOnline = players.every(player => player.online)
console.log(isAllPlayersOnline);
// some()
// перевірити чи є хоча б один гравецт не онлайн
const isOneGoodPlayers = players.some(player => player.timePlayed >= 470)
console.log(isOneGoodPlayers);