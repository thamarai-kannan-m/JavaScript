const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const buttonEle =document.querySelector("button");
const strnCol=document.querySelector("#message")

password.addEventListener('input',function(){
    const passValue=password.value;
    const passLen=passValue.length;
    
    let strengthVal='';
    let col ="white"
    if(passLen===0){
        strengthVal='None'
        col="black";

    }else if(passLen<6){
        strengthVal='Weak';
        col="red";
    }else if(passLen<10){
        strengthVal='Good';
        col="blue";
    }else{
        strengthVal='Strong';
        col="green";
    }
    strength.textContent=strengthVal;
    strnCol.style.color =col;
    strnCol.style.setProperty("border-color", col);
    message.style.display="block";
    



})
