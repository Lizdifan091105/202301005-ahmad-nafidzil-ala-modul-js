/* switch statement untuk melakukan 
pengecekan banyak kondisi dengan lebih mudah dan ringkas.*/

/* penulisan atau syntax
switch (exspression){
    case velue1:
        //do something
        break;
    case velue2:
        // do something
    .....
    .....

    default:
        // do something else
}
  */

let language ="French"
let greeting = null;

switch (language){
    case "english":
        greeting ="good morning";
        break;
    case "French":
        greeting = "bonjour";
        break;
    case "Japanese":
        greeting= "ohayo Gozimasu!"
        break;
    default:
        greeting="selamat pagi";
        
}
console.log (greeting);

//outputnya Bonjour