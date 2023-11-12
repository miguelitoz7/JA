function validateFields() {
    const email = document.getElementById("email").value;
    if(!email) {
        document.getElementById("submit").disabled = true;
    }else if (validateEmail(email)){
        document.getElementById("submit").disabled = false;
    }else (validateEmail(email)) {
        document.getElementById("submit").disabled = true;
    }
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}