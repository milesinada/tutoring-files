import {useState} from "react";
import "./quantityPicker.css";
import Product from "./product.jsx";

const QuantityPicker = (props)=>{

    let[quantity, setQuantity] = useState(1);



    const handleIncrease = () =>{
        console.log("Increase!");
        let value = quantity + 1;
        setQuantity(value);  //ooooor setQuantity(quantity + 1)
        //setQuantity(100)
        props.onChange(value); //call the fn from the parent
    };

    const handleDecrease = () =>{
        let value = quantity - 1;
        if ( value>0) {
         setQuantity(value) 
         console.log("We're losing them!")
         props.onChange(value);
        };
       
    };

    return (
        <div className="quantity-picker">
            <button className="btn btn-sm btn-outline-info" onClick={handleIncrease}>+</button>
            <label>{quantity}</label>       
            <button className="btn btn-sm btn-outline-danger" disabled={quantity ===1} onClick={handleDecrease}>-</button>
        </div>
    );    
};
export default QuantityPicker