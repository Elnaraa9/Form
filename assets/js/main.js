btn = document.querySelector(".button");
btn.onclick = function(){
    let named = document.querySelector(".name").value;
    let surname = document.querySelector(".surname").value;
    let email = document.querySelector(".email").value;
    let age = parseInt(document.querySelector(".age").value);
    let namevalid = false;
    let surnamevalid = false;
    let emailvalid = false;
    let agevalid = false;
    let valid = false;
    if(named !== "" && named !== " " && named[0] === named[0].toUpperCase() && named.length > 3){
        namevalid = true;
    }
    else{
        alert("İnvalid")
    }
    if(surname !== "" && surname !== " " && surname[0] === surname[0].toUpperCase() && surname.length > 3){
        surnamevalid = true;
    }

    for (const element of email) {
        if(email !== "" && email !== " " && element === "@" && email === email.toLowerCase()){
            emailvalid = true;
        }
		else{
			alert('Invalid email')
		}
    }

    if(age > 0){
        agevalid = true;
    }
    else{
        alert('İnvalid age')
    }

    if (namevalid && surnamevalid && emailvalid && agevalid) {
        valid = true;
    } 
};
