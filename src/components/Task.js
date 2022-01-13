import React from 'react'

const Task = ({task, removeTask}) => {
    return (
        <div className = 'task-wrapper'>
           <p className='task-desc'> {task}</p>
           <i className="fas fa-trash-alt" onClick = {()=>removeTask(task)}></i> 
        </div>
    )
}

export default Task
