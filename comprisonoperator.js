//operasi comprison berfungsi sebagai  logika dasar membandingkan di javasscript
/*Operator Fungsi
==          Membandingkan kedua nilai apakah sama. (tidak identik).
!=          Membandingkan kedua nilai apakah tidak sama. (tidak identik).
===         Membandingkan kedua nilai apakah identik.
!==         Membandingkan kedua nilai apakah tidak identik.
>           Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.               
>=          Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
<           Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
<=          Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.

Ketika kita melakukan perbandingan antara dua nilai, JavaScript akan mengevaluasi
kedua nilai tersebut dan mengembalikan boolean dengan nilai hasil perbandingan
tersebut, baik false atau true. Berikut contohnya*/
console.log("comprison operator")
let w = 10
let q = 12;

console.log(w<q);
console.log(w>q);

//outputnya true dan false

/*Dalam operator komparasi di JavaScript, hal yang menjadi sedikit “tricky” adalah
membedakan antara “sama” (==) dan “identik” (===).
Hal inilah yang membedakan antara sama dan identik pada JavaScript. Jika kita
ingin membandingkan hanya dari kesamaan nilainya kita bisa gunakan == tapi jika
kita ingin membandingkan dengan memperhatikan tipe datanya kita gunakan ===.*/

const aString ='10'
const aNumber =10

console.log(aString == aNumber)
//outputnya true karena nilainnya sama-sama 10
console.log(aString===aNumber)
// outputnya false karena walaupun niliainya saama tapi tipedatanya berbeda
