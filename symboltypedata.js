//symbol digunakan untuk untuk menunjukkan identifier yang unik.ketika memberikan dekripsi atau nama symbol
const id= Symbol("id")
console.log(id);
//outpunya Symbol(id)
/* symbol diebut identifer yang unik karena meskipun kita membuat dua variabel symbol dengan nama atau deksripsi yang sama,
kdua nilainya tetap dianggap sama*/
const id1= Symbol ("id");
const id2= Symbol ("id");

console.log(id1==id2);
// outputnya false karena nilai id1 dan id2 berbeda maka hasilnya akan false