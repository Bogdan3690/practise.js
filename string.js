// length — властивість, зберігає довжину рядка
const bio = "Aleksandr Pushkin (born May 26 [June 6, New Style], 1799, Moscow, Russia—died January 29 [February 10], 1837, St. Petersburg) was a Russian poet, novelist, dramatist, and short-story writer; he has often been considered his country's greatest poet and the founder of modern Russian literature.Jul 26, 2025"
console.log(bio.length);
//     toLowerCase() і toUpperCase() — повернуть новий рядок у відповідному регістрі, не змінюють оригінальний рядок
const phrase = "poDdaOwdLqd"
console.log(phrase.toLowerCase());
console.log(phrase.toUpperCase());
//     indexOf() — поверне позицію (індекс) на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено
const fruit = "banana";
console.log(fruit.indexOf("a"));
//     includes() — один з найбільш часто використовуваних методів, в більшості випадків замінює indexOf, перевіряє чи входить підрядок в рядок, повертає true або false
const email = "dblevko@gmail.com"
console.log(email.includes(""));
// str.startsWith() та str.endsWith() перевіряють, чи починається і чи закінчується рядок певним підрядком.
//     trim() — видаляє (“обрізає”) пробіли з початку та кінця рядка.
//     padStart() і padEnd()доповнює поточний рядок іншим рядком (кілька разів, якщо потрібно), доки отриманий рядок не досягне заданої довжини. 
//         Відступ застосовується з кінця/початку поточного рядка.

// practice

/*
 * Пошук в рядку з методом includes()
 */

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';
const string1 = 'Привіт, я Марк Цукерберг, це не спам, пропоную тобі мільйон!';
const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна кампанія #jsIsAwesome';

const normalizeString2 = string2.toLowerCase()
const normalizeBlacklistedWord2 = blacklistedWord2.toLowerCase()

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));
console.log(normalizeString2.includes(normalizeBlacklistedWord2));

