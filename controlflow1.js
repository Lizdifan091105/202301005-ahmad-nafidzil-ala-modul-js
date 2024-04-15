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


//4.multicondition statement

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

// 5.switch style
for (let i=1; i<=5;i++){
   if (i ==3){
      break;
   }
   console.log(i);
}
//atau
let f =2
switch (f) {
   case 1:
      f='one';
      break;
   case 2:
      f='two';
      break;
   default:
      a= 'not found';
      break;

}
console.log(`the velue is ${f}`)
// outputnya  the velue is two



// contoh2 
let result;
//input operasi aritmatika
const operator= prompt('masukan operasi aritmatika (penjumlahan input (+), pengurangan input(-),perkalian input (*), pembagian input(/) ) ')


const number1 = parseFloat(prompt(' masukkan angka pertama :'));
// parseFloat digunakan untuk menkonversi angka yang bertipe data string menjadi angka
const number2= parseFloat(prompt('masukkan angka ke dua :'));

switch (operator) {
   case '+':
      result = number1+number2;
      console.log( `${number1}+${number2} = ${result}`);
      break ;
   case '(+)':
       result = number1+number2;
       console.log( `${number1}+${number2} = ${result}`);
       break ;
   case '-' :
      result= number1-number2;
       console.log( `${number1}-${number2} = ${result}`);
       break ;
   case '(-)':
      result = number1-number2;
      console.log( `${number1}-${number2} = ${result}`);
      break ;
   case '*':
      result = number1*number2;
      console.log( `${number1}*${number2} = ${result}`);
      break ;
   case '(*)':
      result = number1*number2;
      console.log( `${number1}*${number2} = ${result}`);
      break ;
   case '/':
   result = number1/number2;
      console.log( `${number1}/${number2} = ${result}`);
      break ;
   case '(/)':
      result = number1/number2;
      console.log( `${number1}/${number2} = ${result}`);
      break ;
   default :
      console.log('operasi aritmatika tidak ditemukan. mohon isi dengan benar ')
      break;
      
}

