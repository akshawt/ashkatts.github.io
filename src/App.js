import './App.css';
import Header from "./Components/Header";
import {Todos} from "./Components/Todos";
import {Footer} from "./Components/Footer";
import {AddTodo} from "./Components/AddTodo";
// import DarkMode  from "./Components/DarkMode";
import React, { useState, useEffect } from 'react';
// import Switch from "./Components/Switch";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo =[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  
  const onDelete=(todo)=>{
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react doesnt worksss
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
 
  }

  const addTodo = (title,desc)=>{
    console.log("I am adding this todo",title,desc);
    let sno;
    if(todos.length===0){
      sno=0;
    }else{
       sno = todos[todos.length-1].sno+1;

    }
    const myTodo ={
      sno: sno,
      title: title,
      desc: desc,

    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);

    
    
    

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  return (
    <> 
    <Header title="Todo List" searchBar ={false}/>
    {/* <DarkMode/> */}
    {/* <Switch/> */}
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    
    </>
  );
}

export default App;
