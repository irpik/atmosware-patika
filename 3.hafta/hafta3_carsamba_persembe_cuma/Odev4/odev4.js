//ÖDEV-4 Kullanıcı tarafından aldığımız password ile repassword girilsin doğru ve yanlışı göstersin ?

var password, repassword;
password = prompt("Password");
repassword = prompt("Re-Password");

//şifre kontrolü
var badPasswords = [];
function passwordControl(pass, repass){
    //boş şifre kontrolü
    if (pass.length == 0) {
        alert("Blank password field. Please enter password.");
        pass = prompt("Password");
    } else if(repass.length == 0){ //boş yeniden şifre kontrolü
        alert("Blank re-password field. Please enter re-password.");
        pass = prompt("Password");
    }
    //şifreler eşleşmiyorsa re-password yeniden girilmesi sağlanılıyor
    while(pass != repass){
        badPasswords.push(repass);
        alert("Password and re-password do not match. Please re-enter the re-password.");
        repass = prompt("Re-password");
    }
}

//ana fonksiyon 
function main(){
    passwordControl(password, repassword);
    document.write("Giriş yapıldı <br/>");
    document.write("Password: " + password + "<br/>");
    //hatalı re-password'ler yazılıyor
    if(badPasswords.length > 0){
        document.write("Wrong re-passwords <br/>");
        for (let badPass in badPasswords) {
            document.write("==> " + badPasswords[badPass] + "<br/>");
        }
    }
}
main();