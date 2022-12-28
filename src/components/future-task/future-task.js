import React from "react";
import "./future-task.scss";
import Task from "../task/task";


const FutureTask = ({data,deleteTask, backTask}) => {
    const elements = data.map(item=>{
        if(item.status === 'future'){
            return (
                <Task name={item.name} key={item.id} status={item.status} deleteTask={()=> deleteTask(item.id)} backTask={() => backTask(item.id)}/>
            )
        }
    })
    return (
        <div className="futureTask">
            <div className="futureTask__head">
                <h1>Перенесенные</h1>
            </div>
            <div className="futureTask__list">
                {elements}
            </div>
        </div>
    )
}


export default FutureTask;