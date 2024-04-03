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
/*pread operator bekerja seperti meleburkan nilai array menjadi beberapa elemen 
sesuai panjang nilai array-nya. Sehingga jika menuliskan kode seperti ini: 
console.log(...favorites); 
Sama seperti kita menuliskan kode seperti ini: 
console.log(favorites[0], favorites[1], favorites[2], 
favorites[3]); 
Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam 
array baru. Jika tidak menggunakan spread operator ini maka hasilnya akan seperti*/
const favorits=['Seafood','Salad','nugget','Soup']
const others = ['Cake','pie','Donut']

const allFavorits=[favorits, others];

console.log(allFavorits);
/*Nilai array tidak akan tergabung. Alih-alih menggabungkan nilainya, variabel 
allFavorites menjadi array baru yang menampung dua array di dalamnya. Nah, 
bagaimana jika menggunakan spread operator.*/
const favorit=['Seafood','Salad','nugget','Soup']
const other= ['Cake','pie','Donut']

const allFavorit=[...favorit, ...other];

console.log(allFavorit);
//outputnya ' [Seafood', 'Salad', 'nugget', 'Soup', 'Cake', 'pie', 'Donut']
