import React from "react";

import "./current-task.scss";
import Task from "../task/task";


const CurrentTask = ({data, finishTask, deleteTask, rescheduleTask}) => {
    const elements = data.map(item=>{
        if(item.status === 'current'){
            return (
                <Task name={item.name} key={item.id} deleteTask={()=> deleteTask(item.id)} finishTask={() => finishTask(item.id)} rescheduleTask={() => rescheduleTask(item.id)} status={item.status}/>
            )
        }
    })
    return (
        <div className="currentTask">
            <div className="currentTask__head">
                <h1>Задачи</h1>
            </div>
            <div className="currentTask__list">
                {elements}
            </div>
        </div>
    )
}


export default CurrentTask;