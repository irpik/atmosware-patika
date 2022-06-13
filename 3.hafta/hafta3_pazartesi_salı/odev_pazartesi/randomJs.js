//ÖDEV: Math.round(Math.random()*10+1))
// bilgisayar tarafında rastgele  sayılar 1-10 arasında rastgele olsun oluştursun ve bitiş değeri 1<=X<=kullanıcı tarafından bitiş sayısına göre sayılar oluşturulsun 
// bu sayıları bir diziye atama yapalım
// bu sayılardan ilk eleman  ===> dizi[0]
// bu sayılardan son eleman ===> dizi[dizi.length-1]
// bu sayıların küçükten büyüğe sıralama ===> dizi.sort()
// bu sayıların büyükten küçüğe sıralama ===> dizi.sort().reverse()
// bu sayıların toplamları  ===> sum=0  sum+=i;
// bu sayıların çift sayı toplamları  ===> if(dizi[i]%2==0)
// bu sayıların tek sayı toplamları  ===> if(dizi[i]%2==1)
// bu sayıların her birine 1 ekleyerek yeni bir dizi oluşturalım ==> iterative for ile her bir eleman erişmek ve 1 eklemek bunun dinamik kısmını ES kısmında göreceğiz.


//kullanıcıdan değer alınıyor.
var number = Number(prompt("Bitiş değerini giriniz."));
//değer negatif veya boş mu kontrolleri yapılıyor.
while(true){
    if (number > 0 && number != null) {
        break;
    }else{
        number = Number(prompt("Hatalı değer, lütfen pozitif değer giriniz."));
    }
}

var sum = 0;
var evenNumbersSum = 0;
var oddNumbersSum = 0;
var randomArray = [];
var randomArrayNew = [];
//ana fonksiyon
function main(){
    var numbers = randomNumbersCreate(number);
    evenAndOddCalculations(numbers);
    print();
}
main();

//kullanıcıdan alınan değere göre random sayılar üretilir.
function randomNumbersCreate(number){
    for (let i = 0; i < number; i++) {
        var rnd = Math.round(Math.random()*10+1);
        randomArray.push(rnd);
        randomArrayNew.push(rnd+1);
    }
    return randomArray;
}

//sayıların toplamı, tek-çift sayıların toplama fonksiyonu.
function evenAndOddCalculations(numbers){
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        if (numbers[i]%2 == 0) {
            evenNumbersSum += numbers[i];
        } else {
            oddNumbersSum += numbers[i];
        }
    }
}

//sonuçları yazdırma
function print(){
    document.write("Dizi: " + randomArray.toString());
    document.write("<br/>İlk eleman: " + randomArray[0]);
    document.write("<br/>Son eleman: " + randomArray[randomArray.length-1]);
    document.write("<br/>Küçükten büyüğe sıralı: " + randomArray.sort());
    document.write("<br/>Büyükten küçüğe sıralı: " + randomArray.sort().reverse());
    document.write("<br/>Toplam: " + sum);
    document.write("<br/>Çift sayı toplamı: " + evenNumbersSum);
    document.write("<br/>Tek sayı toplamı: " + oddNumbersSum);
    document.write("<br/>Dizi sayılarının bir fazla hali: " + randomArrayNew.toString());
}