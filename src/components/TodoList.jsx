import React from 'react';
import './Style.css'
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

export default function TodoList() {
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
    <fieldset className="border-b border-t border-gray-200">
      <legend className="sr-only">Notifications</legend>
      <div className="divide-y divide-gray-200 list listopad">
        <div className="relative flex items-start pb-4 pt-3.5 ">
          <div className="min-w-0 flex-1 text-sm leading-6">
            {todos?.map(todo=>(
              <div className="relative flex items-start pb-4 pt-3.5">
              <div className="min-w-0 flex-1 text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  {todo?.name};
                </label>
                <p id="comments-description" className="text-gray-500"></p>
              </div>
              <div className="ml-3 flex h-6 items-center">
                <input
                  id="candidates"
                  aria-describedby="candidates-description"
                  name="candidates"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      <div>

      </div>
    </fieldset>
  )
}