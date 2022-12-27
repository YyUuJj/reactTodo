import React from "react";
import "./task.css";


const Task = (props) => {
    const {name, finishTask, deleteTask, rescheduleTask, backTask, status} = props;
    if(status ==="future"){
        return(
            <div className='task'>
                <span>{name}</span>
                <div className="task-icons">
                    <img src="images/icons/delete.png" onClick={deleteTask}/>
                    <img src="images/icons/back.png" onClick={backTask}/>
                </div>
            </div>
        )
    }else if(status=="current"){
        return(
            <div className='task'>
                <span>{name}</span>
                <div className="task-icons">
                    <img src="images/icons/complete.png" onClick={finishTask}/>
                    <img src="images/icons/delete.png" onClick={deleteTask}/>
                    <img src="images/icons/reschedule.png" onClick={rescheduleTask}/>
                </div>
            </div>
        )
    }else if(status == "finished") {
        return(
            <div className='task'>
                <span>{name}</span>
                <div className="task-icons">
                    <img src="images/icons/delete.png" onClick={deleteTask}/>
                    <img src="images/icons/return.png" onClick={backTask}/>
                </div>
            </div>
        )
    }
}


export default Task;