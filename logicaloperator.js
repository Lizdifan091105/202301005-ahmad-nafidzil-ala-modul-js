/*Terdapat beberapa operator lain yang dapat kita gunakan untuk menetapkan logika yang lebih kompleks,
yakni dengan logical operators. Dengan logical operator, kita dapat menggunakan kombinasi
 dari dua nilai boolean atau bahkan lebih dalam menetapkan logika
operator  fungsinya
&&    Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).
|| Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true).
!
Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.*/
console.log("logical operator")
let ab =10;
let cd =12;

// And operator 
console.log(ab<15&& cd >10);
// (true && true) maka outputnya true
console.log(ab>15&& cd>10);
// (false && true) maka outputnya false

// OR operator
console.log(ab<15 || cd>10);
// (true || true) maka outputnya true
console.log(ab>15 || cd>10);
// (false || true)maka outputnya true

//NOT operator
console.log(!(ab<15));
// !(true) maka outputnya false
console.log(!(ab <15 && 10));
//!(true && true)  hasil !(true) maka outputnya false

