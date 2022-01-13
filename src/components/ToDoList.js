import React, {useState,useEffect} from 'react'

import InputForm from './InputForm'
import Task from './Task'

const ToDoList = () => {
    
    const [tasks, setTasks] = useState([])

    const addTask = (newTask)=>{

        const newTasks = [...tasks]
        if(newTask !== ''){
            newTasks.push(newTask)
            setTasks(newTasks)
        }
       
    }


    // function to take a task out of list
    const removeTask = (taskToRemove) =>{
        const newTasks = [...tasks]

        if(tasks.length ===1){
            setTasks([])
        }
        else{
            setTasks(newTasks.filter((task)=>{
                return task !== taskToRemove
            }
            ))
        }
        
    }
    // get tasks from local storage on load
    useEffect(()=>{
        const fromStorage = localStorage.getItem('tasks')
        // If there is tasks in local storage, use those
        if(fromStorage !=null){
            setTasks(JSON.parse(fromStorage))
        }
    },[])


    // Any time the tasks state is updated, save tasks list to local storage
    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(tasks))
    },[tasks])
    return (
        <>
        <div className = 'list-wrapper'>


            <div className ='list-upper'>
                <h1>What to do Today</h1>
                <InputForm addTask = {addTask} />
            </div>
            <div className='list-lower'>
                <ul className='tasks-list'>
                {
                    tasks.map((task) =>{
                        return(
                            <Task key = {task} task ={task} removeTask={removeTask}/>
                        )
                    })
                }
                
                </ul>        
            </div>

        </div>
        
        </>
        
    )
}

export default ToDoList
