function validateForm(){
    let first_name=document.forms["myForm"]["first_name"].value;

    let firstNameError=document.getElementById("firstNameError");

    firstNameError.innerHTML="";

    let hasError=false;

    if(first_name===""){
        firstNameError.innerHTML="Name is required";
        hasError=true;
    }
    if(hasError){
        return false;
    }
    return true;
}