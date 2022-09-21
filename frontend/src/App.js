import './App.css';
import Form from "./components/Form/Form";
import {useEffect, useState} from "react";
import TaskCard from "./components/TaskCard/TaskCard";
import EditModal from "./components/EditModal/EditModal";
import {Button} from "react-daisyui";

function App() {
    // useState variables
    const [tasks, setTasks] = useState([])
    const [visible, setVisible] = useState(false)

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

    const toggleVisible = () => {
        setVisible(!visible)
    }

    // UI
  return (
    <div>
      <Form getAllTasks={getAllTasks}/>
        <div className="flex flex-wrap justify-center gap-1">
            {tasks.map((task, index) => (
                <TaskCard task={task} getAllTasks={getAllTasks} toggleVisible={toggleVisible}  key={index}/>
            ))}
        </div>
        <EditModal visible={visible} toggleVisible={toggleVisible}/>
    </div>
  );
}

export default App;
