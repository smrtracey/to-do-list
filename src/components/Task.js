import React from 'react'

const Task = ({task, removeTask}) => {
    return (
        <div>
           
           <p onClick = {()=>removeTask(task)}>{task}</p> 
        </div>
    )
}

export default Task
