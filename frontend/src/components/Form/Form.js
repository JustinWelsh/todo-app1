import {Input} from "react-daisyui";
import {logDOM} from "@testing-library/react";

const Form = ({ getAllTasks }) => {
    const onSubmit = async (e) => {
        e.preventDefault();

        // console.log(e.target[0].value);
        // console.log(e.target[1].value);

        const taskObj = {
            description: e.target[0].value,
            priority: e.target[1].value
        };

        await fetch("http://localhost:8080", {
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'POST',
            body: JSON.stringify(taskObj) // body data type must match "Content-Type" header
        }).then(res => {
            if (res.json()) {
                getAllTasks()
            }
        })
    }


    return (
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">

                    <h2 className="card-title">Form</h2>

                    <form className={"flex flex-col gap-y-7\t"} onSubmit={onSubmit}>

                        <div>
                            <label htmlFor="task-description">New task</label>
                            <input id="task-description" name={"description"} type="text" placeholder="type here.." className="input input-bordered input-primary w-full max-w-xs" />
                        </div>

                        <div>
                            <label htmlFor="task-priority">Priority</label>
                            <select id={"task-priority"} name={"priority"} className="select select-bordered w-full max-w-xs">
                                <option> </option>
                                <option>Low</option>
                                <option>High</option>
                            </select>
                        </div>

                        <div className="card-actions justify-end">
                            <button type={"submit"} className="btn btn-primary">Add</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
    };


export default Form;