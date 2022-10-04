var btn = document.getElementById("btn_submit");


let emails = [];
let passwords = [];

btn.addEventListener("click", function (e) {
    e.preventDefault();
    let email = document.getElementById("inputEmail").value;
    let pw = document.getElementById("inputPassword1").value;
    if (validateEmail(email) && (ValidatePassword(pw))) {
        for (var i = 0, len = localStorage.length; i < len; ++i) {
            emails.push(JSON.parse(localStorage.getItem(localStorage.key(0)))["Email"]);
            passwords.push(JSON.parse(localStorage.getItem(localStorage.key(0)))["User_password"]);
        }

        if ((emails.indexOf(email) == passwords.indexOf(pw)) && (emails.includes(email) == passwords.includes(pw))) {
            console.log("Success")
        }



    }
});

function validateEmail(valor) {


    // Define our regular expression.
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // Using test we can check if the text match the pattern
    if (validEmail.test(valor) && (valor.length > 0)) {
        return true;
    } else {
        return false;
    }
}
function ValidatePassword(valor) {

    var regx = /^([a-zA-Z0-9]+)([a-zA-Z0-9])?$/;




    if ((valor.match(regx)) && (valor.length > 0)) {
        return true;

    } else {

        return false;

    }

};