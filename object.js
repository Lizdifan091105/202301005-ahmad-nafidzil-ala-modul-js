/*Object mampu menyimpan nilai dari beragam tipe data dan membentuk 
data yang lebih kompleks. Untuk menetapkan objek pada sebuah variabel gunakan 
tanda kurung kurawal {}. bject berisi pasangan key dan value yang juga dikenal dengan property. Key 
berperan mirip seperti nama variabel yang menyimpan sebuah nilai. Sementara, 
value berisi nilai dengan tipe data apa pun termasuk objek lain. Key dan value di 
dalam object dituliskan seperti berikut: 
let object = {key1: "value1", key2: "value2", key3: "value3"}

Key harus berupa string dan dituliskan sebelum titik dua (:), lalu diikuti dengan 
value-nya. Meskipun key merupakan string, kita tidak perlu menuliskan tanda petik 
kecuali ada karakter khusus seperti spasi.*/

console.log ("Object");

const user={
    firstName :"Luke",  
    //firstName merupakan key sedangkan Luke merupakan velue
    lastName  :"Skywalker",
    age       :19,
    isjedi: true,
};
console.log(`nama saya ${user.firstName} ${user.lastName}`);
console.log(`umur saya ${user.age} tahun`);
/*outputnya nama saya Luke Skywalker
umur saya 19 tahun */
