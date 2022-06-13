//Kullanıcıdan aldığımız verinin ilk harfi ve son harfi görünsün geriye kalan 
//karakter kadar * (yıldız) olsun ==> Alınan örneğin Hamit  ==>  H***t
//Yardımcı oalcak metotlar v.s                                                                         
//function
//string ==> replace,sub,String,charAt()
//loop

//veri girişi
var text = prompt("Enter a text");
document.write(text + "<br/>");

//eksik veri girişi kontrol
do {
    if (text.length > 2) {
        break;
    } else {
        text = prompt("En az 3 karakter");
    }
} while (true);

function main(){
    replaceText(text);
}
main();

//yıldız ekleme
function replaceText(data){
    var dataSub = data.substring(1, data.length-1);

    for (let i = 0; i < dataSub.length; i++) {
        dataSub = dataSub.replace(dataSub.charAt(i), "*");
    }
    document.write(data[0].toUpperCase() + dataSub + data[data.length-1]);
}
