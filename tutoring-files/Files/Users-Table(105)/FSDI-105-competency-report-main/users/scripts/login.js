function login(){
   // console.log("login script")
    // get the values from the two inputs and display them on the console
    let email = $("#txtEmail").val(); 
    let password = $("#txtPassword").val();    
    //read the users
    //console.log(email,password)
    let userList = readUsers(); //fn is in StoreManager.js
    let flag=false;
    //let userList = ["Jadro","Ray","Nick","Brett","Kyle"];
    //travel the array and display on the console each one fo the names
    for(let i=0;i<userList.length;i++){
         //console.log(userList[i]); //CALL THE i !!!!
         if(
             email===userList[i].email &&
             password===userList[i].password
             ){  //need "userList" beofre [i]
             console.log("Welcome");
             flag=true;
             window.location="users.html";
         } //else{  //use flag instead of displaying invail xArray
             //console.log("Invalid")
        // }
    
        if(flag==false){
            console.log("Invalid Credentials");
            $("#alertError").removeClass("hide")
            setTimeout(function(){
                $("#alertError").addClass('hide')    
            },3000)
            
        }
}
   
}
function init(){
    //hook events
    $("#signInBtn").click(login);
}
window.onload=init;