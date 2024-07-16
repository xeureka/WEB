import { useState } from "react"


function ToDo(){

    const [task,setTask] = useState();

    function addTask(event){
        setTask(event.trget.value)

    }

    

    function handleAddTask(){
        const addTask = {
            Task:task
        }

        setTask(t => ([...t,addTask]))

    }

    function handleRemoveTask(){

    }


    return(
        <div>
            <h1>TO DO </h1>
            <input type="text" placeholder="Enter You task here"  onChange={addTask} value={task}/>
            <button onClick={handleAddTask}>ADD</button>

            <h3>Current Tasks</h3>
            <ol>
                
            </ol>
        </div>
    )

}

export default ToDo