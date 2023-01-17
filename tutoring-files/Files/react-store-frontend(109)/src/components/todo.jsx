import "./todo.css"
import { useState } from 'react';


const ToDo =()=>{
    const [text, setText] = useState("");
    const[list, setlist]= useState ([]);
    

    const handleAdd = () =>{
        console.log(text ,"Added To List");
        let allTodos = [...list];
        allTodos.push(text);
        setlist(allTodos);
    };

    const handleText = (e) =>{
        setText(e.target.value);
    };

    return(
        <div className="todo-page">
            <h1>Shopping List</h1>

            <input onChange={handleText} type="text" />
            <button onClick={handleAdd} className="btn btn-sm btn-primary" >Add</button>

            <div className="todo-list">
                {list.map((todo) => (<h6 key={todo}>{todo}</h6>))}
            </div>
        </div>
    );
};


export default ToDo;