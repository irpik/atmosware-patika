//ÖDEV-10
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun 
//bizde tahmin etmeye çalışalım bizim tahmin sayımız 5 olsun 
//eğer biz sayıdan büyükse büyük tahmin eğer sayıdan küçükse küçük tahmin. 
//ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?


var rnd, count = 1;

function findTheNumber(){
    rnd = Math.floor(Math.random()*10 +1); //random sayı üretiliyor
    let prediction = Number(prompt("1 ile 10 arasında sayı giriniz.")); //kullanıcıdan sayı alınıyor

    if (!isNaN(prediction)) { //girilen değer number olup olmadığı kontrol ediliyor
        while(rnd !== prediction){
            if (prediction < rnd) {
                alert("Küçük tahmin.");
            }else{
                alert("Büyük tahmin.");
            }
            prediction = Number(prompt("1 ile 10 arasında sayı giriniz."));
            count++;
        }
        document.write(count + ". tahminde buldunuz.");
    }else{  //number değer değilse yeniden değer isteniyor
        alert("Lütfen sayı giriniz.");
        findTheNumber();
    }    
}

findTheNumber();