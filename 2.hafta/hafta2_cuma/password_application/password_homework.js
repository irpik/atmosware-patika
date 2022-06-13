var password = "";
var rePassword = "";
var exit = true;

do {
    //parola input alma
    password = prompt("Please enter password (minimum 6 characters).");
    rePassword = prompt("Please re-enter the password.");
    //parola boyutu kontrol
    if (password.length >= 6 && rePassword.length >= 6) {
        exit = passwordControl(password, rePassword);
    }else{
        alert("Password size must be at least 6 characters!!");
    }
    //parola eşit ise mesaj yazdırma
    if(exit === false)
        document.write("<h1> Login successful. Welcome.. <h1/>");
} while (exit);
//parola kontrol fonksiyonu
function passwordControl(password1, password2){
    if(password1 !== password2){
        alert("Incorrect password entered. Please re-enter.");
        return true;
    }
    return false;
}