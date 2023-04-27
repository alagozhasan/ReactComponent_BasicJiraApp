import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks,onDelete,onUpdate}) => {
  
  return (
    <div className='task-list'>
      {tasks.map((task,index)=>{
       return(
        <TaskItem task={task} key={index} onDelete={onDelete} onUpdate={onUpdate}/>
        )
      })}
    </div>
  )
}

export default TaskList
