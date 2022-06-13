//ÖDEV-5
//Zamanı dinamik olarak alıp hangi gün olduğunu gösteren arrow function 
//algoritmasını yazalım switch-case   new Date().getDay() 0=pazar 1=pazartesi

//Date() fonksiyonu ile gün alınıyor
var date = new Date().getDay();

//gelen tarihe göre gün belirleniyor
let getDay = (day) =>{
    switch (day) {
        case 0:
            document.write("Pazar");
            break;
        case 1:
            document.write("Pazartesi");
            break;
        case 2:
            document.write("Salı");
            break;
        case 3:
            document.write("Çarşamba");
            break;
        case 4:
            document.write("Perşembe");
            break;
        case 5:
            document.write("Cuma");
            break;
        case 6:
            document.write("Cumartesi");
            break;
        default:
            document.write("Hatalı gün");
            break;
    }
}

getDay(date);
