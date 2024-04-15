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
