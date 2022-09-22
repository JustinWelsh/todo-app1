const TaskCard = ({ task, getAllTasks, toggleVisible, setSelectedTask}) => {
    const onDelete = async (e) => {
        e.preventDefault();

        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
        await fetch("http://localhost:8080", {
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'Delete',
            body: JSON.stringify(task) // body data type must match "Content-Type" header
        }).then(res => {
            if (res.json()) {
                getAllTasks()
            }
        })
    }

    const onEditClicked = () => {
        toggleVisible();
        setSelectedTask(task)
    }

    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{task.priority}</h2>
                <p>{task.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-xs btn-primary" onClick={onEditClicked}>Edit</button>
                    <button className="btn btn-xs btn-ghost" onClick={onDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard