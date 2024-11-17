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
    <div className='bg-indigo-400 text-white w-full min-h-screen flex items-center flex-col font-mono '>
      <h1 className='text-4xl font-bold my-4'>TO DO APP</h1>

      <div>
        <input 
            type="text" 
            placeholder='Add Task ....'
            value={newTask}
            onChange={handleInputChange}
            className='px-2 py-4  text-black rounded'
            />

            <button
                onClick={addTask}
                className='mx-12 font-bold text-xl bg-violet-500 px-2 py-3 w-40 rounded hover:bg-violet-400 active:bg-violet-600 my-12'>
                
                    Add</button>
      </div>

      <ol>

      <ol>
        {tasks.map((task, index) => (
                <li key={index} className='w-200 p-4 bg-red-500 rounded m-5'>
                    <span className='font-serif text-black mx-16 text-xl font-bold'>{task}</span>
                    <button onClick={() => deleteTask(index)} className='bg-slate-500 mx-12 px-4 py-2 font-bold text-lg font-sans rounded hover:bg-slate-700 active:bg-slate-400'>Delete</button>
                    <button onClick={() => moveTaskUp(index)} className='bg-slate-500 mx-12 px-4 py-2 font-bold text-lg font-sans rounded hover:bg-slate-700 active:bg-slate-400'>Up</button>
                    <button onClick={() => moveTaskDown(index)} className='bg-slate-500 mx-12 px-4 py-2 font-bold text-lg font-sans rounded hover:bg-slate-700 active:bg-slate-400'>Down</button>
                </li>
                ))}
            </ol>
      </ol>


    </div>
  )
}

export default ToDo
