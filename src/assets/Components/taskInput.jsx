import { useState } from "react"

    function NewTaskInput(props) {
        const [task, setTask] = useState('')

        function handClick() {
            alert(task)
            props.addTask(task)
        }
    
    function handleTextChange(e) {
        setTask(e.target.vale)
    }

    return (
        <>
        <input type="text" onChange={handleTextChange} placeholder="Write a task Here.." />
        <button onClick={handClick}>Add Task</button>
        </>
    )
}
export default NewTaskInput