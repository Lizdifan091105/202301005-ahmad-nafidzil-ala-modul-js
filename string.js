console.log("type data string");
//tipe data string  menggunakan tanda petik bisa tanda petik satu ('')atau tanda petik dua("") yam digunakan untuk tipedata berupa teks
let kalimat = "selamat";
console.log(kalimat);
// output nya String

// penggunaan tanda petik satu atau dua tidak ada perbedaan  

const teks= '"what dou you think about javascript?"i asked'
console.log(teks)
// outputnya "what dou you think about javascript?"i asked

// lalu pjika keduanya digunakan keduanya seperti ini
// const pertanyaan='"I think it's awesome!" he answered confidently';
// console.log(pertanyaan);
// maka outputnya akan eror

/* untuk emngatasi eror tersebut kita menggunakan tanda(\) setelah itu tanda petik,tanda tersebut untuk menandakan bahwa
itu hanya tanda petik biasa bukan merupakan pembatas string. mekanisme ini disebut dengan nama escape string
tanda tersebut juga m berguna untuk mengabaikan simbol yang menimbulkan ambigu pada string*/
const pertanyaan='"I think it\'s awesome!" he answered confidently';
console.log(pertanyaan);
 //outpunya "I think it's awesome!" he answered confidently

 // pada operator string kita dapat menambahkan  operator(+) yang mempunyai fungsi mengambungkan 2teks dari 2 varaibel
//  ini dinamakan string concatenantion

 let kata="kura"
let katakata=kata+kata;
console.log(katakata)
// outputnya yaitu kurakura

/*string dapat juga mendukung string interpolation yaitu dapat memasukkan variabel kedalam sebuah string template
untuk mendefinisikan string template yaitu dengan tanda (`) disebelah keyboard angka1. dan untuk memasukan variabel yaitu penulisannya
${nama variabel} contoh*/
const jengen= "nafidzil"
console.log(`hello,my name is ${jengen}`);












