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




