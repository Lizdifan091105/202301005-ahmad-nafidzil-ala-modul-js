/*
Control Flow menjelaskan mana urutan expression & statements yang akan 
dieksekusi. Sehingga Web Application atau Standalone Application yang dibuat dengan 
typescript menjadi lebih interaktif. Ada beberapa hal yang akan di bahas di antaranya 
adalah: 
1. Block Statements 
Block statements atau terkadang disebut compound statement adalah sekumpulan 
statements yang akan dieksekusi secara berurutan di dalam sebuah kurung kurawal 
buka dan kurung kurawal tutup. ({ … })

LabelIdentifier:{
    //list of statment/s
}
contoh*/
var x=81;
{
    x=14;
}
console.log(x);