/*BigInt sama seperti number tetapi bedanya yaitu cakupannilai dimana number memiliki cakupan -(2pangkat53-1)hingga(2pangkat53-1)
tetapi bigIntmemiliki cakupan yang lebih luas. buntuk membedakan Bigint dengan number yaitu  BigInt di akhir angka ada huruf (n) 
sedangkan number tidak*/
const bingint= 123456789012345678901234567890123456789n;
const nomber = 123456789012345678901234567890123456789;

console.log(bingint);
// outputnya 123456789012345678901234567890123456789n
console.log(nomber);
// outputnya 1.2345678901234568e+38
// bigint juga bisa digunakan untuk bilangan kecil misal 7n atau contoh berikut
console.log("operasi aritmatika dengan angak kecil");
let e =10n 
let f = 3n 
console.log(e+f);
console.log(e-f);
console.log(e*f);
console.log(e/f);
console.log(e%f);

