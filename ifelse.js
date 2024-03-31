/*Statement if akan menguji suatu kondisi. Jika kondisi bernilai true, maka blok kode di
dalamnya akan dijalankan. Sebaliknya, jika bernilai false, maka proses yang ditentukan
akan dilewatkan*/
const isRaining = false;

console.log("persiapan sebelum kegiatan")
if(isRaining){
    console.log("hari ini hujan bawa payung")

}
console.log("berangkat kegiatan")
/*outputnya 
persiapan sebelum kegiatan
hari ini hujan bawa payung
berangkat kegiatan*/
//Lalu bagaimana jika Anda ingin melakukan operasi lain ketika kondisi bernilai false? Jawabannya adalah statement else.

let xa = 50;
 if (xa >70){
    console.log(xa);

 }
 else {
    console.log("nilai kurang dari 70");

 }
//outputnya nilai kurang dari 70

/*Kita juga bisa mengecek beberapa kondisi sekaligus dengan menggabungkan else dan
if. Contohnya adalah seperti program berikut*/

let language = 'French'
let greeting = 'selamat pagi'

if(language ==="English"){
    greeting ='good morning';

}
else if(language==="Japanese"){
    greeting ='Ohayo Gozaimasu!'
}
else if(language==='French'){
    greeting ='Bonjour'
}
console.log(greeting);

// outputnya Bonjour

/*avaScript juga mendukung ternary operator atau 
conditional expressions. Dengan ini, kita bisa menuliskan if-else statement hanya dalam 
satu baris.*/
// penulisannya yaitu condition ? true expreesion : false expression
 const isMamber = false;
 const discount = isMamber ? 0.1 : 0;
 console.log(`Anda mendapatkan diskon sebesar ${discount *100}%`)
 //outputnya anda mendapatkan diskon sebesar 0%
 /*Ternary operator membutuhkan tiga operand. Sebelum tanda tanya (?) berisi kondisi 
yang ingin kita evaluasi. Kemudian diikuti dengan expression apabila nilai kondisinya 
benar sebelum tanda titik dua. Terakhir adalah expression yang dieksekusi ketika 
kondisinya salah. Karena merupakan conditional expression, maka operand kedua dan 
ketiga harus mengembalikan nilai. */

/*Lalu bagaimana jika kita menuliskan expression yang tidak 
mengembalikan nilai boolean? Jawabannya bisa. nilai ini disebut truthy yaitu nilai ketika
dievaluasi menghasilkan nilai true.nilai kedua disebut falsy artinya sama tapi outputnya false
 Jadi manakah yang termasuk 
truthy dan falsy? Selain nilai boolean false, tipe data atau nilai yang dianggap falsy, 
antara lain: 
Number 0 
BigInt 0n 
String kosong seperti “” atau „‟ 
null 
undefined
NaN, atau Not a Number*/

let name= "";

if (name){
    console.log(`halo,${name}`);

}
else{
    console.log('nama masih kosong');
}
//outputnya Nama masih kosong