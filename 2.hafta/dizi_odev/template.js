//new Array(2) içerisine tek bir sayı değeri girilir ise dizi başlangıç boyutunu vermiş oluruz.
//Bir tane String değer girilir ise dizinin ilk elemanı olur.
var dizi1 = new Array(2);
dizi1[0] = 0;
dizi1.push(1);
dizi1.push(2);
dizi1.push(3);

for (var d1 of dizi1) {
    document.write(d1 + "<br/>");
}
document.write("Dizi1 boyutu: " + dizi1.length);

document.write("<br/><br/>***********************<br/><br/>");

//Alttaki gibi dizi tanımlaması yapılır ise dizinin ilk elemanı verilmiş olur.
var dizi2 = [2];
dizi2.push(3);
for (var d2 of dizi2) {
    document.write(d2 + "<br/>");
}
document.write("Dizi2 boyutu: " + dizi2.length);

document.write("<br/><br/>***********************<br/><br/>");

//muCars1 ve myCars2 dizileri aynıdır.
var myCars1 = new Array(2,"Volvo","BMW");
var myCars2 = [2,"Volvo","BMW"];

for (var m1 of myCars1) {
    document.write(m1 + "<br/>");
}
document.write("myCars1 boyutu: " + myCars1.length + "<br/>");
document.write("<br/><br/>***********************<br/><br/>");
for (var m2 of myCars2) {
    document.write(m2 + "<br/>");
}
document.write("myCars2 boyutu: " + myCars2.length + "<br/>");