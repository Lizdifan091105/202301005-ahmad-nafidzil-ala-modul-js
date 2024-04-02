/*Spread operator ini digunakan untuk menyebarkan nilai array atau lebih tepatnya 
iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga 
titik (...). */

console.log("Spread Operator")
const favorites = ["Seafood", "Salad", "Nugget","soup"];

console.log (favorites)
//outputnya ['Seafood', 'Salad', 'Nugget','soup']

/*Pada kode tersebut hasil yang dicetak adalah sebuah array (ditunjukkan dengan 
tanda [ ]), karena memang mencetak nilai favorites itu sendiri. Dengan 
menggunakan spread operator dapat menyebarkan nilai-nilai dalam array tersebut.*/
console.log(...favorites);
// outputnya Seafood Salad Nugget soup