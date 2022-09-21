import './App.css';
import Form from "./components/Form/Form";
import {useEffect, useState} from "react";
import TaskCard from "./components/TaskCard/TaskCard";

function App() {
    // useState variables
    const [tasks, setTasks] = useState([])

    // useEffect function(s)
    useEffect(() => {
        getAllTasks()
    }, [])

    // component functions
    const getAllTasks = () => {
        fetch("http://localhost:8080")
            .then(res => res.json())
            .then(data => setTasks(data))
    }

    // UI
  return (
    <div>
      <Form getAllTasks={getAllTasks}/>
        <div className="flex flex-wrap justify-center gap-1">
            {tasks.map((task, index) => (
                <TaskCard task={task} getAllTasks={getAllTasks}  key={index}/>
            ))}
        </div>
    </div>
  );
}

export default App;
