// 1 block statcment sama dengan controlflow yang dulu

// 2.condtional statment

var waktu = 20;
 if(waktu <= 20){
    waktu ='benar'
 }else{
    waktu ='salah'
 }
 console.log(waktu)

// outputnya benar

//  3.tenary operator
console.log('tenary operator')
let usia= 20;
// syntak=    let result=condition? velue1 : velue2;
let izin=(usia>19) ? true : false;

console.log(izin)

//outputnya true


function getfee(ismember){
   return ( ismember? '$2.00':'$10.00')
}
console.log(getfee(true))
console.log(getfee(false))
console.log(getfee(null))


//multicondition statement

/*Untuk menghadapi multiple condition kita bisa menggunakan If.. Else If dan Else, 
block statement ke n akan dieksekusi jika kondisinya memenuhi syarat. */

const number =-9;
if (number >0) {
   console.log('the number is postive')
}else if(number==0){
   console.log('the number is 0')
}
else{
   console.log('the number is negative');

}
// outputnya the number is negative
