var numberInput = Number(window.prompt("Lütfen bir sayı giriniz"));

while(numberInput <= 1){
    numberInput = Number(window.prompt("Lütfen 1'den büyük sayı giriniz.!!"));
}
if (numberInput !== 44) {
    //kullanıcıdan alınan sayı
    document.write("Verilen sayı: " + numberInput + "<br/>");

    //Sayı adeti bulma fonksiyon
    numberCount(numberInput);

    //tek ve çift sayı hesaplamaları fonksiyon
    oddAndEvenCalculation(numberInput);
}

//Sayı adeti bulma
function numberCount(number){
    if (number >= 100) {
        document.write("Kaç tane sayı: 98" + "<br/>");
    }else if(number >= 7){
        document.write("Kaç tane sayı:" + (number-1) + "<br/>");
    }else{
        document.write("Kaç tane sayı:" + number + "<br/>");
    }
}

//tek ve çift sayı hesaplamaları
function oddAndEvenCalculation(number){
    var numberSum = 0; //Sayıların toplamı
    var oddNumberAmount = 0; //tek sayı adeti
    var sumOfOddNumbers = 0; //tek sayı toplamı
    var oddNumbers = ""; //tek sayılar
    var evenNumberAmount = 0; //çift sayı adeti
    var sumOfEvenNumbers = 0; //çift sayı toplamı
    var evenNumbers = ""; //çift sayılar
    for (var i = 1; i <= number; i++) {
        if (i == 7) {
            continue;
        }
        if (i == 100) {
            break;
        }
        if (i%2 == 1) {  //tek sayı işlemleri
            oddNumberAmount++;
            sumOfOddNumbers += i;
            oddNumbers += i+"-";
        }else{          //çift sayı işlemleri
            evenNumberAmount++;
            sumOfEvenNumbers += i;
            evenNumbers += i+"-";
        }
        numberSum += i;
    }
    document.write("Toplamları: " + numberSum + "<br/><br/>");
    document.write("Tek sayı adeti: " + oddNumberAmount + "<br/>");
    document.write("Tek sayı toplamı: " + sumOfOddNumbers + "<br/>");
    document.write("Tek sayılar: " + oddNumbers.slice(0,(oddNumbers.length-1)) + "<br/><br/>");
    document.write("Çift sayı adeti: " + evenNumberAmount + "<br/>");
    document.write("Çift sayı toplamı: " + sumOfEvenNumbers + "<br/>");
    document.write("Çift sayılar: " + evenNumbers.slice(0,(evenNumbers.length-1)) + "<br/>");
}