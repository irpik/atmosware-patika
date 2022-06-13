//ÖDEV-1
//y=3x+4k ==> 1.dereceden 2 bilinmyenli denklem
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?


var x, k;
//x değeri kullanıcıdan alınıyor
function inputX(){
    x = Number(prompt("x değerini giriniz."));
    //x degeri sayı değilse yeniden oluşturulacak
    while(isNaN(x)){
        x = Number(prompt("x değerini giriniz. Lütfen sayı giriniz!!"));
    }
    
}
//y değeri kullanıcıdan alınıyor
function inputK(){
    k = Number(prompt("k değerini giriniz."));
    //y degeri sayı değilse yeniden oluşturulacak
    while(isNaN(x)){
        k = Number(prompt("k değerini giriniz. Lütfen sayı giriniz!!"));
    }
}

//ana fonksiyon
function main(){
    inputX();
    inputK();
    document.write("y=" + 3*x+4*k);
}
main();