//1.while statement
// cara pertama
let n=0
while(n<3){
    console.log(n++)
}
//cara yang kedua
let i=3
while(i) console.log(i--)
// outputnya 3 2 1
// 2. do While Statement
 let k =1
 do {
    k+=1;
    console.log(k)
 } while (k<5)



 // for statment
 // syntax for ([initialExpression];[condition];[incrementExpressions])
 let indeks =1;
 for(indeks;indeks < 9; indeks++){
    console.log('perulangan ke '+indeks)
 }

 /*4 for...of
  Typescript juga mendukung perulangan menggunakan for…of statement untuk 
melakukan iteration pada object seperti array, list atau tuple*/
let arr = [1,2,3,4,5]
for(let arrVelue of arr){
    console.log(arrVelue)
}
//outputnya 1 2 3 4 5

/* 5.for...in
Typescript juga mendukung perulangan menggunakan for…of statement untuk 
melakukan iteration pada object seperti array, list atau tyuple*/

let arra=[10,20,30,40];
for (let index in arra){
    console.log(index);
    console.log(arra[index])
}

//6.Break statement
/*ada perulangan break juga dapat digunakan untuk keluar dari suatu perulangan dan 
terus mengeksekusi kode setelah keluar dari perulangan*/


let q =0 ;
for (q; q<10;q++ ){
    if (q===7) break;
    console.log('perulangan ke'+q)

}
/* 7. continue Statement
Penggunaan continue dilakukan jika kita ingin menghentikan eksekusi suatu 
statement dalam suatu iteration dan melanjutkan kembali perulangan dengan 
iteration selanjutnya sampai selesai*/
let nomor =0
for(nomor =0;nomor<6;nomor++){
    if (nomor===3)continue;
    console.log('perulangan ke '+nomor)
}
//outputnya 1 2 4 5

/*labeled statement
Dengan label statement kita dapat membuat sebuah identifier sebagai sebuah 
statement yang menjadi acuan saat menggunakan break atau continue statement */

let str ='';
let idx =0

loop :
for (idx;idx<5;idx++){
    if  (idx===2){
        continue loop;
    
    }
    str =str+idx;
    console.log(str)
    
}
/*outputnya
0
01
013
0134
*/