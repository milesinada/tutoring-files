

function Dog(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
}

class Cat{
    constructor(name,age,){
        this.name = name;
        this.age = age;   
    } 
    roar(){
           console.log("I'm roarrrrring!") 
        }
}

function test1 (){
    //ways to create object on JS

    //1 object literal  quick and easy  but not reusable
    let lola = { 
        name: "lola",
        age:2,
    };
    console.log(lola);


    //2 object constructor
    let fido = new Dog("Lychee",4,"Black");
    let another = new Dog("Cool Dude", 4, "Gray");
    console.log(fido,another);

    //3 Class
    let a = new Cat("Dr mewsalot", 1);
    console.log(a);

    a.roar()
}


//exc
test1();