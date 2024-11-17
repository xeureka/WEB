import React,{useState} from 'react'

const ToDo = () => {
    const [tasks,setTask] = useState(['Eat BreakFast','Take a Shower']);
    const [newTask,setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)

    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTask([...tasks,newTask])
            setNewTask("")
        }
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_,i) => i !== index);
        setTask(updatedTask)

    }

    function moveTaskUp(index){
        if (index > 0){
            const updatedTask =  [...tasks];
            [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]]
            setTask(updatedTask);
        }

    }

    function moveTaskDown(index){
        if (index < tasks.length - 1){
            const updatedTask = [...tasks];

            [updatedTask[index] ,updatedTask[index+1]] =
            [updatedTask[index+1],updatedTask[index]]

            setTask(updatedTask);

        }

    }

  return (
    <div>
      <h1>TO Do APPLICTION</h1>

      <div>
        <input 
            type="text" 
            placeholder='Enter Your Task Here....'
            value={newTask}
            onChange={handleInputChange}
            />

            <button onClick={addTask}>Add</button>
      </div>

      <ol>

      <ol>
        {tasks.map((task, index) => (
                <li key={index}>
                    <span>{task}</span>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                    <button onClick={() => moveTaskUp(index)}>Up</button>
                    <button onClick={() => moveTaskDown(index)}>Down</button>
                </li>
                ))}
            </ol>
      </ol>


    </div>
  )
}

export default ToDo
