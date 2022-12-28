import React from "react";

import "./finished-task.scss";
import Task from "../task/task";


const FinishedTask = ({data, deleteTask, backTask}) => {
    const elements = data.map(item=>{
        if(item.status === 'finished'){
            return (
                <Task name={item.name} key={item.id} status={item.status} deleteTask={()=> deleteTask(item.id)} backTask={() => backTask(item.id)}/>
            )
        }
    })
    return (
        <div className="finishedTask">
            <div className="finishedTask__head">
                <h1>Завершенные</h1>
            </div>
            <div className="finishedTask__list">
                {elements}
            </div>
        </div>
    )
}


export default FinishedTask;