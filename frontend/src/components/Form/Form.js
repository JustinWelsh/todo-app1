import {useState, useEffect} from "react";

const Form = ({ getAllTasks, selectedTask, toggleVisible }) => {
    const [task, setTask] = useState({
        description: "",
        priority: ""
    })

    useEffect(() => {
        if (selectedTask) {
            setTask(selectedTask)
        }
    }, [selectedTask])

    const onChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async () => {

        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
        //
        // const taskObj = {
        //     description: e.target[0].value,
        //     priority: e.target[1].value
        // };

        console.log(task);
        await fetch("http://localhost:8080", {
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'POST',
            body: JSON.stringify(task) // body data type must match "Content-Type" header
        }).then(res => {
            if (res.json()) {
                getAllTasks()
                setTask({
                    description: "",
                    priority: ""
                })
            }
        })
    }


    return (
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Form</h2>
                    <div className={"flex flex-col gap-y-7\t"}>
                        <div>
                            <label htmlFor="task-description">New task</label>
                            <input id="task-description" name={"description"} onChange={onChange} type="text" placeholder="Description" className="input input-bordered input-primary w-full max-w-xs" value={task?.description} />
                        </div>
                        <div>
                            <label htmlFor="task-priority">Priority</label>
                            <select id={"task-priority"} name={"priority"} onChange={onChange} className="select select-bordered w-full max-w-xs" value={task?.priority}>
                                <option> </option>
                                <option>High</option>
                                <option>Low</option>
                            </select>
                        </div>
                        {!selectedTask ? (
                            <div className="card-actions justify-end">
                                <button onClick={onSubmit} className="btn btn-primary">Add</button>
                            </div>
                        ) : (
                            <div className="card-actions justify-end">
                                <button className="btn" onClick={toggleVisible}>Cancel</button>
                                <button className={"btn btn-primary"} onClick={() => {
                                    onSubmit();
                                    toggleVisible();
                                }}>Save</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
    };


export default Form;