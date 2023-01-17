let saloon={
    name:"The Fashion Pet",
    address:{
        street:"Av. Palm",
        number:"262",
        zip:"23456",
        city:"San Diego",
        state:"California"
    },
    hours:{
        open:"9:00am",
        close:"5:00pm"
    },
    pets:[]    
}
//add the next fields for name, age, gender, breed, service, owner name, contact phone
function displayInfo(){
    document.getElementById("footer-info").innerHTML = `<p>Welcome to The Fashion Pet! Our address is ${saloon.address.street} ${saloon.address.number}, ZIP code: ${saloon.address.zip}<p>
    <p>${saloon.address.city}, ${saloon.address.state}</p>`;
    //display the information of the pet saloon on the footer
}

function displayPetNames(){
    for(let i=0;i<saloon.pets.length;i++){
        console.log(saloon.pets[i].name);
    }
}

let x=0;
//constructor
//           <----- Local variables--------------------------->
function Pet(petName, age, gender, breed, services, ownerName, contactPhone){
    
    this.name = petName;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.services = services;
    this.ownerName = ownerName;
    this.contactPhone = contactPhone
    this.id=x++;
}

function showAlert() {
    alert ("Number of pets registered: "+ saloon.pets.length)
    console.log("Number of pets registered: "+ saloon.pets.length );
  }
  //challenge is similar to This (?)
function checkInput(variable, id, isValid){
    if(variable.length<1)
    {
        document.getElementById(id).classList.add("error");
        return false;
    }
    else{
        document.getElementById(id).classList.remove("error");
        return true;
    }
}

function showPetCards(){
    document.getElementById("petList").innerHTML = ``;
    for(let i = 0;i<saloon.pets.length; i++)
    {
        document.getElementById("petList").innerHTML += createCard(saloon.pets[i]);
    }
}

    //challenge add a button to remove specific card
function createCard(pet){
    
    return `
    <div id="${pet.id}" class="card my-card ">
            <h2>${pet.name}</h2>
            <label>Age: ${pet.age}</label>
            <label>Breed: ${pet.breed}</label>
            <label> Gender: ${pet.gender}</label>
            <label>Service: ${pet.service} </label>
            <label>Owner: ${pet.ownerName} </label>
            <label>Phone: ${pet.contactPhone} </label>
            <button class="btn btn-danger btn-sm" onclick="removePet(${pet.id});">Delete</button>
          </div>
    `;
}

//challenge add a button to remove specific card

function getInfo(){
    let isValid = true;
    let petName = document.getElementById("txtPetName").value;
    isValid = checkInput(petName, "txtPetName");

    let age = document.getElementById("nbAge").value;
    isValid = checkInput(age, "nbAge");

    let gender = document.getElementById("gender").value;
    isValid = checkInput(gender, "gender");

    let breed = document.getElementById("breed").value;
    isValid = checkInput(breed, "breed");

    let services = document.getElementById("services").value;
    isValid = checkInput(services, "services");

    let ownerName = document.getElementById("txtOwnerName").value;
    isValid = checkInput(ownerName, "txtOwnerName");

    let contactPhone = document.getElementById("telOwner").value;
    isValid = checkInput(contactPhone, "telOwner");

      //created a new object , calling the constructor here
    
    console.log(isValid);
    if(isValid == true)
    {
        let pet= new Pet(petName, age, gender, breed, services,ownerName, contactPhone);
         saloon.pets.push(pet);
         console.log(pet);
         document.getElementById("petInfo").reset();
         showPetCards();
    }
   

    
    //console.log(`${petName} ${age} ${gender} ${breed} ${services}${ownerName} ${contactPhone}`)

    //displays all pets in console
    /* for(let i=0; i<saloon.pets.length; i++)
     {
        console.log(saloon.pets[i]);
     }*/
    
  }
  function removePet(index){
    //search the pet we want to remove
    saloon.pets.forEach(function callback (pet,value){
        if(index===pet.id)
        {
        console.log("I found it in the position",value);
        saloon.pets.splice(value,1);
        } 
    });
    //remove the pet from the array
    //remove the pet from the html
    console.log("Removing Pet",index);
    document.getElementById(index).remove();
}

  function searchPet(){
    //get the value from the inout search and store it in a variable
    let searchString = document.getElementById("searchInput").value;

    saloon.pets.forEach(function callback (pet,value){
        if(searchString.toLowerCase()===pet.name.toLowerCase()){
        document.getElementById(pet.id).classList.add("highlight");
        } 
    });

  }
  function init(){
      displayInfo();
    let scooby=new Pet("Scooby","50","Male","Dane","Grooming","Shaggy","555-555-5555");
    let wiley=new Pet("Wiley","60","Male","Coyote","Grooming","Warner","444-444-4444")
    let penry=new Pet("Penry","70","Male","Mutt","Grooming","Sarge","222-222-2222")
    let muttley=new Pet("Muttley","55","Male","Mutt","Cleaning","Dick","235-543-7876")
    saloon.pets.push(scooby)
    saloon.pets.push(wiley)
    saloon.pets.push(penry)
    saloon.pets.push(muttley)
    ;
    showPetCards();
  }

  window.onload=init;