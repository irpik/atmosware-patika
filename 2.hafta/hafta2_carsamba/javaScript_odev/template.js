//################################### Odev 1 #########################################

// Kullanıcıda tarafından aldığımız 2 tane sayının
var number1,number2;
number1=Number(prompt("1.sayıyı giriniz"));
number2=Number(prompt("2.sayıyı giriniz"));

// s1-) Bu sayılardan en küçüğü nedir ?
document.write("En küçük sayı: " + Math.min(number1, number2) + "<br/>");

// s2-) Bu sayılardan en büyüğü nedir ?
document.write("En Büyük sayı: " + Math.max(number1, number2) + "<br/>");

// s3-) Bu sayılardan en küçüğü karekökü nedir ?
document.write("En küçüğünün kare kökü: " + Math.sqrt(Math.abs(Math.min(number1, number2))) + "<br/>");

//s4-) Bu sayılardan en küçüğü karekökünün üste yuvarlıyalım nedir ?
document.write("En küçük sayının karekökünü üste yuvarlama: " + Math.ceil(Math.sqrt(Math.abs(Math.min(number1,number2)))) + "<br/>");

// s5-) Bu sayılardan en büyüğü mutlak nedir ?
document.write("En büyük mutlak değeri: " + Math.abs(Math.max(number1, number2)) + "<br/>");

// s6-) Bu sayılardan en büyüğü alt taban en küçüğü üst taban şeklinde üstünü alalım
document.write("En büyük alt taban, en küçük üst taban: " + 
    Math.pow(Math.abs(Math.max(number1, number2)),
    Math.abs(Math.min(number1, number2))) + "<br/>");

//################################### Odev 2 #########################################

// kullanıcı tarafından girilen bir kelimenin
var text;
text=prompt("Lütfen Kelime Giriniz.");

//S-1) Kaç karakterlidir ?
document.write("Kaç karakter: " + text.length + "<br/>");

//S-2) boşluklar alınarak Kaç karakterlidir ?
document.write("Boşluklar alınınca karakter sayısı: " + text.trim().length + "<br/>");

//S-3) bütün kelimeyi küçük harfle göstermek ?
document.write("Bütün kelime küçük harf: " + text.toLowerCase() + "<br/>");

//S-4) bütün kelimeyi büyük harfle göstermek ?
document.write("Bütün kelime küçük harf: " + text.toUpperCase() + "<br/>");

//S-5) ilk harf nedir  ?
document.write("İlk harf: " + text.charAt(0) + "<br/>");

//S-6) girdiğiniz kelime java ile başlıyor mu  ?
document.write("Java ile başlıyor mu? " + text.startsWith("java") + "<br/>");

//S-7) girdiğiniz kelimenin sonuna "-ben js öğreniyorum"   ?
document.write("Kelimenin sonuna -ben ekleme: " + text.concat(" -ben") +"<br/>");

//S-8) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin   ?
document.write("0. index ile 4. index arası kelime: " + text.substring(0, 4) + "<br/>");

//S-9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek ?
var text2 = prompt("İkinci Kelimeyi Giriniz.");
document.write("Birinci kelime ile ikinci kelime yer değiştirme (replace): " + text.replace(text, text2) + "<br/>");

//################################### JSON Uygulama #########################################

//1.adım: adınızı ve soyadınızı json objesine ekleyip
//2.adım: bu json objesini String'e çevirip
//3.adım: bu json objesini String'e çevirilmiş kısımdan substring fonksiyon metodu ile isim ve soyismini ayrıştır
//4.adım: adınızı ve soyasınız document.write ile ekranda gösterelim.

//1.adım
var nameSurname = {
    "name": 'Kadir',
    "surname": 'İrpik',
}

//2.adım
var jsonToString = JSON.stringify(nameSurname);

//3.adım
var nameStartIndex = jsonToString.search("Kadir");
var nameEndIndex = nameStartIndex + "Kadir".length;
var name = jsonToString.substring(nameStartIndex, nameEndIndex);

var surnameStartIndex = jsonToString.search("İrpik");
var surnameEndIndex = surnameStartIndex + "İrpik".length;
var surname = jsonToString.substring(surnameStartIndex, surnameEndIndex);

//4.adım
document.write("<br/> Adı: " + name + "<br/> Soyadı: " + surname);