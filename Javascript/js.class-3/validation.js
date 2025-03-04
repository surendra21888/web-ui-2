function validateform(){
    //alter('test case 123')
    let emailid=document.getElementById('email').value;
    let password=document.getElementById('password').value;

    if(emailid===""){
        document.getElementById('emailmsg').innerHTML="Pls enter email id:"
    }
    if(password===""){
        document.getElementById('password').innerHTML="Pls enter password:"
    }
    return false 
}