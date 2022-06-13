//ÖDEV-9
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren 
//Anonymous function algoritmasını yazalım switch-case   new Date().getDay()
// let deneme= function (){ }

//Date ile gün değeri alınıyor
let date = new Date().getDay();

var whichDay = function (day) {
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
};

whichDay(date);

