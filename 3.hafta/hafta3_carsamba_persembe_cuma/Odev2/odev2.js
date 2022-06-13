//ÖDEV-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül:(x*9/5)+32

//kullanıcıdan veri alınıyor
var celsius;
function userCelsiusInput(){
    celsius = Number(prompt("Derece giriniz(Santigrat)."));
    while (isNaN(celsius)) {
        celsius = Number(prompt("Derece giriniz(Santigrat). Lütfen sayı giriniz!!"));
    }
}

//celsius fahrenhayt'a çevriliyor
function celsiusToFahrenhayt(){
    userCelsiusInput();
    var fahrenhayt = ((celsius*9/5)+32);
    document.write("Fahrenhayt: " + fahrenhayt + "&#176;F");
}

celsiusToFahrenhayt();