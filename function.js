// first-class function

// global excution contenx
/*var w=10        // variabel berada dalam global context
(function() {
    var b =20;   // variabel lokal berada dalam function context
})();
console.log(w) //10
console.log(b) // "b" belum didefinisikan
*/

//function excution context
let hello = 'hello world'

 function excutionContext1(){
    console.log ('didalam function')
    excutionContext2();
    console.log('didalam function')
 }
 function excutionContext2(){
    console.log ('didalam function')
 }

 excutionContext1();
 console.log ('didalam global Execution context')


//  simple function
 function display(){
    console.log('hello')
    console.log(' nafidzil')
 }
 console.log(display())

 // function parameter

 function tampilkan (from, text){
    // argument : from, text
    console.log( from +'='+text)
 }

 tampilkan ( 'felix','hallo! nafid')
 tampilkan ('nafid','apa kabarmu? felix!')