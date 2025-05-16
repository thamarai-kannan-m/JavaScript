const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const checkpassword = document.getElementById("checkpassword");

// event listener
form.addEventListener("submit",function(e){
    e.preventDefault();
    checkInput();
});
function checkInput(){
    const usernameValue= username.value.trim();
    const emailValue= email.value.trim();
    const passwordValue= password.value.trim();
    const checkPasswordValue= checkpassword.value.trim();
    let bool=false;
    if(usernameValue===""){
        setErrorFor(username, "username cannot be empty");
        bool=false;
    }else{
        setSucessFor(username);
        bool=true;

    }
    if(emailValue===""){
        setErrorFor(username, "Eamil cannot be empty");
        bool=false;
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Enter Valid E-mail");
        bool=false;

    }else{
        setSucessFor(email);
        bool=true;

    }
     if(passwordValue===""){
        setErrorFor(password, "Password cannot be empty");
        bool=false;
    }else{
        setSucessFor(password);
        bool=true;

    }
    if(checkPasswordValue===""){
        setErrorFor(checkpassword, "Check Password cannot be empty");
        bool=false;
    }else if(checkPasswordValue!==passwordValue){
        setErrorFor(checkpassword,"Password is not Matching");
        bool=false;
    }else{
        setSucessFor(checkpassword);
        bool=true;

    }
    
    if(bool){
        alert("Your Account Created SucessFully");
    }


    
}
function setErrorFor(input,message){
    const controlForm = input.parentElement;
    console.log(controlForm);
    const small = controlForm.querySelector(".error");
    small.innerText=message;
    controlForm.className= "control-form fail";

}
function setSucessFor(input){
        const controlForm = input.parentElement;
        controlForm.className= "control-form success";

}
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
