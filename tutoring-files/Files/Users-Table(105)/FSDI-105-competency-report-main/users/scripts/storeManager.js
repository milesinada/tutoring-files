const LS_KEY="users";
function saveUser(user){
    //load the old data
    let oldData=readUsers();
    //merge the data
    oldData.push(user);
    let value=JSON.stringify(oldData); //parse into a JSON string
    localStorage.setItem(LS_KEY,value);
    //user is an obj
}
function readUsers(){
    //get values from localStorage
    let data=localStorage.getItem(LS_KEY)
    if(!data){//NOT data
        return []; //create the array the first registration
    }else{
    let list=JSON.parse(data); //parse string back into obj/array
    return list;
    }
} 