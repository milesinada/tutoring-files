function calculator(){
    
    console.log("Calculator function");
    let value1 = Number(prompt("Enter first value"));
    let value2 = Number(prompt("Enter second value"));
    //get two values from the prompt and display them on the console
    let sum,sub,mul,div;
    sum = value1+value2;
    sub = value1-value2;
    mul = value1*value2;
    div = value1/value2;
    //rough round to 2 decimal places
    div = div.toFixed(2);
    mul = mul.toFixed(2);
    sub = sub.toFixed(2);
    sum = sum.toFixed(2);
    console.log(sum);
    console.log(sub);
    console.log(mul);
    console.log(div);
    document.getElementById("results").innerHTML=`
        <p class="result"> ${value1} + ${value2} = ${sum}</p>
        <p class="result"> ${value1} - ${value2} = ${sub}</p>
        <p class="result"> ${value1} / ${value2} = ${div}</p>
        <p class="result"> ${value1} * ${value2} = ${mul}</p>
    `;   
}