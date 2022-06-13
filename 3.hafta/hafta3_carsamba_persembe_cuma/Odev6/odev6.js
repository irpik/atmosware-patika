//ÖDEV-6
//Login userEmail,userPassword kullanıcıdan aldığımız değeri 
//db ile karşılaştıracak eğer doğru ise adminFunction'a 
//gönderecek 4 kalan haktan aşağı doğru düşecek eğer 
//kalan hak sayımız 0 olursa kullanıcı bloke olsun
// dbUserEmail="deneme@gmail.com"
// dbUserPassword="root"

//database
var database = {
    "dbUserEmail":"deneme@gmail.com",
    "dbUserPassword":"root",
    "passwordAttempt":4
}

//giriş yapıldı ise giriş hatalı giriş hakkı geri 4 tyapılıyor ve başarılı giriş mesajı veriliyor
function adminFunction(){
    database.passwordAttempt = 4;
    let success = `<h1>Giriş Başarılı. Hoşgeldiniz :)</h1>`;
    document.write(success);
}

//login butonuna basılınca çalışan fonksiyon. 
//input'lardan alınan email ve password kontrolleri yapılıyor.
function loginButton(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if(database.dbUserEmail == email){
        if (database.passwordAttempt > 0) {
            if (database.dbUserPassword == password) {
                adminFunction();
            }else{ //hatalı şifre girişinde giriş hakkı azaltılıyor
                database.passwordAttempt = database.passwordAttempt-1;
                document.getElementById("hataMesaji").innerHTML = "Hatalı şifre. Deneme hakkınız: " + database.passwordAttempt;
                //giriş hakkı bitmiş ise kullanıcı blocked oluyor
                if (database.passwordAttempt == 0) {
                    document.getElementById("hataMesaji").innerHTML = "Blocked :(";
                }
            }
        }
    }else{
        document.getElementById("hataMesaji").innerHTML = "Hatalı mail adresi";
    }
}