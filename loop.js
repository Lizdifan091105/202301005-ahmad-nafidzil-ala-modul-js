/* jika kita menulis program dimana melakukan hal yang sama berkali-kali maka kita memakai perulangan atau looping
looping memiliki banyak opsi yaitu :*/

/* for loop yang memiliki struktur atau syntax sepeerti
for(inisiasi variabel;test kondisi;perubahan nilai variabel)
{
    do something
}
*/

for (let i=0; i <5;i++){
    console.log(i)
}
/*outputnya
0
1
2
3
4
*/

/* for of loop yang memiliki syntax
for (arrayItem of myArray){
    do something
}
*/
let myArray = ["Luke","Han","Chewbacca","Leia"];

for (const arrayitem of myArray){
    console.log(arrayitem)
}
/*outputnya
Luke
Han
Chewbacca
Leia
*/

/* while  and do-while yan hampir sam dengan for*/
let r=1;

while(r<=20){
    console.log(r);
    r++;
}
// outputnya 1 sampai 20
//bentuk lain dari while yaitu do-while
let s=1;
do{
    console.log(s);
    s++;
}
while(s<=10);
//outputnya 1 sampai 10

/*4. Infinite loops 
Ketika menerapkan perulangan pada program, ada satu kondisi yang perlu kita 
hindari yaitu infinite loop. Infinite loop atau endless loop adalah kondisi di mana 
program kita stucked di dalam perulangan. Ia akan berjalan terus hingga 
menyebabkan crash pada aplikasi dan komputer kecuali ada intervensi secara 
eksternal, seperti mematikan aplikasi. 
Kode berikut ini adalah contoh di mana kondisi infinite loop dapat terjadi:
*/
/*let i=1;
while (1<=5){
    console.log(i)
}
code diatas akan menjadi infinite loop karena variabel i 
akan selalu bernilai 1, alhasil i<=5 akan selalu bernilai true yang mengakibatkan 
aplikasi akan terus mencetak angka 1 ke konsol sehinhha mengalami crash untuk itu diperlukan 
increment untuk membuat variabel tidak selalu bernilai 1*/
