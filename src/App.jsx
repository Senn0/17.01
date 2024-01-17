import './App.css'
import React from 'react';
import Title from './components/Title';
import TodoList from './components/TodoList';
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const[todos, setTodos] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:3000/api/todos')
    .then((data)=> 
    {
      setTodos(data.data);
    })
    .catch((error) => console.log(error));
  }, [])

  useEffect(() =>{
    console.log(todos);
  }, [])
  return (
    


    <div className="todo-app">
      <Title />
      <TodoList />

      

    </div>
  );
};

export default App;



