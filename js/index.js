const form = document.getElementById("form")
const campos = document.querySelectorAll(".form-control")
const spans = document.querySelectorAll(".span-required")
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    nameValidate();
    apelidoValidate();
    emailValidate();
    enderecoValidate();
    cepValidate();
    countryValidate();
    stateValidate();
    if(nameValidate() && apelidoValidate() && emailValidate() && enderecoValidate() && cepValidate() && countryValidate() && stateValidate()){
        window.location.href="formulario.html";
    }
});

function setError(index) {
    campos[index].style.border = "3px solid #e63636"
    if (spans[index]) {
        spans[index].style.display = "block";
    }
}

function removeError(index) {
    campos[index].style.border = "3px solid #4efa05"
    if (spans[index]) {
        spans[index].style.display = "none";
    }
}

function nameValidate(){
    if(campos[0].value.length < 3) {
        setError(0);
        return false
    } else {
        removeError(0);
        return true
    }
}

function apelidoValidate(){
    if(campos[1].value.length < 1) {
        setError(1);
        return false
    } else {
        removeError(1);
        return true
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[2].value)) {
        setError(2);
        return false
    } else {
        removeError(2);
        return true
    }
}

function enderecoValidate(){
    if(campos[3].value.length < 1) {
        setError(3);
        return false
    } else {
        removeError(3);
        return true
    }
}

function cepValidate(){
    if(campos[4].value.length != 8) {
        setError(4);
        return false
    } else {
        removeError(4);
        return true
    }
}

function countryValidate(){
    if(campos[5].value === "0") {
        setError(5);
        return false
    } else {
        removeError(5);
        return true
    }
}

function stateValidate(){
    if(campos[6].value === "0") {
        setError(6);
        return false
    } else {
        removeError(6);
        return true
    }
}