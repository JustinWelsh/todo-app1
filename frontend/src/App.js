import './App.css';
import Form from "./components/Form/Form";
import {useEffect, useState} from "react";

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
      <Form />
        {tasks.map((task, index) => (
            <div key={index}>
                <p>{task.id}</p>
                <p>{task.description}</p>
                <p>{task.priority}</p>
            </div>
        ))}
    </div>
  );
}

export default App;
