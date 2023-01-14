console.log("Register")
//create constructor for user ES2015
class User{
    constructor(email, password, first, last, age, address, phone, payment, color){
            this.email = email;
            this.password = password;
            this.fname = first;
            this.lname = last;
            this.age = age;
            this.address = address;
            this.phone = phone;
            this.payment = payment;
            this.color = color;
    }
}
//create isValid
function isValid(user){
    //return false when the user is not valid
    //return true when the user is valid
    let valid=true;
    //we need to reset original appearance of inputs
    //by removing the error class (style.css)
    //$('input').removeClass("error")
    //validations
    if(user.email.length==0){
        //if we get here it means that email is not valid
        valid=false;
        $("#txtEmail").addClass("error")
    }
    if(user.password.length==0){
        valid=false;
        $("#txtPassword").addClass("error");
    }
    if(user.fname.length==0){
        valid=false;
        $("#txtFirst").addClass("error")
    }
    if(user.lname.length==0){
        valid=false;
        $("#txtLast").addClass("error")
    }
    if(user.age.length==0){
        valid=false;
        $("#nbAge").addClass("error")
    }
    if(user.address.length==0){
        valid=false;
        $("#txtAddress").addClass("error")
    }
    if(user.phone.length==0){
        valid=false;
        $("#txtPhone").addClass("error")
    }/*
    if(user.Payment.length==0){
        valid=false;
        $("#selPayment").addClass("error")
    }
    if(user.color.length==0){
        valid=false;
        $("#txtColor").addClass("error")
    }*/
    return valid;
}
//register user function
function registerUser(){
    let email = $("#txtEmail").val(); //remeber to check HTML id=
    let password = $("#txtPassword").val();
    let first = $("#txtFirst").val();
    let last = $("#txtLast").val();
    let age = $("#nbAge").val();
    let address = $("#txtAddress").val();
    let phone = $("#txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#txtColor").val();
    let user = new User(email,password, first, last, age, address, phone, payment, color);
    if(isValid(user)==true){
        saveUser(user); //this fn is in the storeManager
    }
   
    clear()
}
function clear(){
    $("#registerForm input").val("");
}
 
function init(){
    console.log("Init Function")
    //hook events
    $("#btnSave").click(registerUser);
}
window.onload=init;

//Create a clear function onclick
//$("#txtEmail").val("something");
//$("txtEmail").val("")
/*
function clear(){
$("#txtEmail").val("")
$("#txtPassword").val("")
$("#txtFirst").val("")
$("#txtLast").val("")
$("#nbAge").val("")
$("#txtAddress").val("")
$("#txtPhone").val("")
$("#selPayment").val("")
$("#txtColor").val("")
} */