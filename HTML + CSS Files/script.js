function validasi(event){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var password = document.getElementById("password").value
    var female = document.getElementById("female").checked
    var male = document.getElementById("male").checked
    var checkbox = document.getElementById("checkbox").checked

    event.preventDefault()

    if(name == ""){
        alert("Please Fill in Your Full Name")
    }
    else if(!email.endsWith("@gmail.com")){
        alert("Please Use a Google Account (@gmail.com)")
    }
    else if(phone.charAt(0) != 0){
        alert("Please fill phone number starting with '0'")
    }
    else if(!passwordValidation(password)){
        alert("Password must be at least 8 alphanumeric characters")
    }
    else if(!female && !male){
        alert("Please Select one of the Gender")
    }
    else if(!checkbox){
        alert("Please make sure to tick the agreement")
    }
    else{
        alert("Registration Successfull!")
    }
}

function passwordValidation(password){
    if(password.length < 8){
        return false
    }

    isAlpha = false
    isNum = false

    for(var i = 0; i < password.length; i++){
        if(isNaN(password[i])){
            isAlpha = true
        }
        else{
            isNum = true
        }
        if(isNum && isAlpha){
            return true
        }
    }

    return false
}