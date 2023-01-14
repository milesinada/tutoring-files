//OOP
//object literal *
// object constructor
let student1={
    name:"Miles",
    age:99,
    grade:"A",
    music:["Coldplay","Oasis","Keane"],
    address:{
        street:"Av. Palm",
        number:"262",
        zip:"22456",
        city:"San Diego",
        state:"California"
    }
}
console.log(student1.music[1]);

let student2={
    name:"Jasmine",
    age:88,
    grade:"A"
}


console.log(student2);

let starbucks=[
    {
        name:"John",
        type:"Gold",
        stars:100,
        rewards:[]
    },
    {
        name:"Robert",
        type:"Green",
        stars:20,
        rewards:["Frappuccino"]
    },
    {
        name:"Lucia",
        type:"Gold",
        stars:40,
        rewards:[]
    }
];
console.log(starbucks[2]);

function displayClients(){
    //mortal solution
    console.log(starbucks[0].name)
    console.log(starbucks[1].name)
    console.log(starbucks[2].name)

    //immortal solution iterate pets array
    for(let i=0;i<starbucks.length;i++)
    
    {
        console.log(starbucks[i].name) //as long as starbucks.length is true this comand will kepp running the cycle
    }
} 
displayClients();
/*let num= 1234     this is a variable*/
/*let saloon={
    name:"The Fashion Pet",
    address:{
        street:"Av. Palm",
        number:"262",
        zip:"23456",
        city:"San Diego",
        state:"California"
    },                   this is an object*/ 
  /*[] is an array 
  pets:[
    {
        name:"Scooby",
        age:50,
        gender:"Male",
        breed:"Dane",
        service:"Grooming",
        ownerName:"Shaggy",
        contactPhone:"(555)555-5555"
    },
    {
        name:"Lychee",
        age:4,
        gender:"Male",
        breed:"Poi-Dog Mix",
        service:"Teeth Cleaning",
        ownerName:"Miles",
        contactPhone:"(808)555-5555"
    },
    {
        name:"Miki",
        age:5,
        gender:"Male",
        breed:"American Shorthair-Cat",
        service:"Grooming",
        ownerName:"Mariah",
        contactPhone:"(808)555-5555"
    }
]*/


/*let isValid = true;
let petName= 
if(petName.length<1){
    isValid = false;
    document.getElementById("txtPetName").classList.add("error");
}
else{
    document.getElementById("txtPetName").classList.remove("error");
}
isValid = false;

if(isValid == true)
{
    let pet = new pet
}*/