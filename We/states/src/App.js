import './App.css';
import { React, useState } from 'react';
import StudentCard from "./Components/StudentCard"
import {v4 as uuid} from "uuid"
import data from './data.json';

function App() {

  const [studentsData, setStudentsData] = useState(data);
  const [taskName, setTaskName] = useState("");
  const [todoData, setTodoData] = useState([]);
 
  const handleAddTodo = () => {
    const sunil = {
      id: uuid(),
      title: taskName,
      status:false
    }
    setTodoData([sunil, ...todoData])
  }
  const handleClick = (id) => {
    const newStudentData = studentsData.map((item) =>
      item.id === id ? { ...item, is_selected: !item.is_selected } : item
    );
    console.log(id);
    setStudentsData(newStudentData);
  }

  return (
    <>
      <h1 className="main">Todo App</h1>
       <div className="matter">
       <input type="text" placeholder="enter Todo" value={taskName} onChange={(e) => {
          console.log(e.target.value);
          setTaskName(e.target.value)
        }} />
        <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        {todoData.map((item, id) =>
          <div className="matter" key={item.id}>{item.title}</div>)}
      

      <h1 className="main" >Students Details</h1>
    <div className="App">
      {studentsData.map((item, id) => {
        return <StudentCard key={id} data1={item} handleClick={handleClick}/>
      })}  
      </div>
      </>
  );
}

export default App;

