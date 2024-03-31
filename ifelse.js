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