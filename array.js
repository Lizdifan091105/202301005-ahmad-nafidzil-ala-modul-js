/*Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan 
menempatkannya dalam satu variable. */

console.log("Array");

let myArrays=["Coklat", 42.5, 22, true, "programming"];
console.log(myArrays);
/*outputnya Coklat, 42.5, 22, true, programming  */

/*Perbedaan array dengan object adalah data pada array disusun secara berurutan dan 
diakses menggunakan index. Untuk mengakses nilai di dalam array, kita gunakan 
tanda kurung siku [] yang di dalamnya berisi angka yang merupakan posisi nilai 
yang ingin diakses.posisi tersebut dinamakan indeks dan indeks dimulai dari 0
bukan 1.Jika program mengakses index di luar ukuran array-nya, maka hasilnya akan 
undefined*/
let myAray=['coklat',42.5,22,true,'programming']
console.log(myAray[0]);
console.log(myAray[1]);
console.log(myAray[2]);
console.log(myAray[3]);
console.log(myAray[4]);
console.log(myAray[5]);
console.log("Panjang Nilai array adalah "+myAray.length+".");
/*outputnya
coklat
42.5
22
true
programming
panjang Nilai array adalah 5 
length digunakan untuk menentukan panjang array
*/

/*Untuk menambahkan data ke dalam array, dapat menggunakan metode push(). 
Fungsi push ini akan menambahkan data di akhir array.*/
const myArrayes= ['Coklat',42.5,22,true,"Programming"];

myArrayes.push('javascript')
console.log (myArrayes);
// outputnya [Coklat,42.5,22,true,"Programming,javascript]

/*Sedangkan untuk mengeluarkan data atau elemen terakhir dari array, dapat gunakan 
metode pop().*/

const myArays= ['orange',42.5,22,true,"Programming"];
myArays.pop();
console.log(myArays);
//  outputnya ['orange',42.5,22,true]

/*Metode lain yang bisa digunakan untuk memanipulasi data pada array adalah shift() 
dan unshift(). Metode shift() digunakan untuk mengeluarkan elemen pertama dari 
array, sementara unshift() digunakan untuk menambahkan elemen di awal array.*/
let aray =['cokelat',42.5,22,true,'programming']
aray.shift();
aray.unshift('Apple')
console.log(aray);
/*outputnya[ Apple,42.5,22,true,programming] */

/*Untuk menghapus data dari array dapat menggunakan keyword delete. Namun, di 
sini keyword delete hanya menghapus data pada index yang ditentukan lalu 
membiarkan posisi tersebut kosong.*/

let araay =['cokelat',42.5,22,true,'programming'];

delete araay[1];
console.log(araay);
/*outputnya ['cokelat', empty, 22, true, 'programming']
indeks 1 menjadi empety karena sudah dihapus sehingga indeks tersbut kosong
atau empety */
//Untuk menghapus elemen, gunakan metode splice() seperti ini:

let arays =['cokelat',42.5,22,true,'programming']
arays.splice(2,1) //Menghapus indeks 2 sebanyak 1 elemen
console.log(arays)
// outputnya [cokelat,42.5,true,programming]


