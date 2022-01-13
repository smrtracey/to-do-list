import React, {useState,useEffect} from 'react'

import InputForm from './InputForm'
import Task from './Task'

const ToDoList = () => {
    
    const [tasks, setTasks] = useState([])

    const addTask = (newTask)=>{
        const newTasks = [...tasks]
        newTasks.push(newTask)
        setTasks(newTasks)
    }


    // function to take a task out of list
    const removeTask = (taskToRemove) =>{
        const newTasks = [...tasks]
        setTasks(newTasks.filter((task)=>{
            return task !== taskToRemove
        }
        ))
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
        <div className ='list-container'>
            <h1> To Do</h1>
            <InputForm addTask = {addTask} className ='input-form'/>
            <ul className='taks-list'>
            {
                tasks.map((task) =>{
                    return(
                        <Task key = {task} task ={task} removeTask={removeTask}/>
                    )
                })
            }
            
            </ul>        
        </div>
    )
}

export default ToDoList
