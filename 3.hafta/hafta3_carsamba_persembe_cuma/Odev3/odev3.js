//ÖDEV-3 verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?

var number;
//kullanıcıdan sayı değeri alınıyor
function numberInput(){
    number = Number(prompt("Lütfen bir sayı giriniz."));
    while(isNaN(number)){
        number = Number(prompt("Lütfen bir sayı giriniz!!"));
    }
    return number;
}

//sayı kontrolü. negatif mi pozitif mi
function neagtiveOrPozitive(){
    if (numberInput() >= 0) {
        document.write("Sayı Pozitif");
    }else{
        document.write("Sayı Negatif");
    }
}

neagtiveOrPozitive();