import React from "react";

import "./task.scss";

import completeImg from "../../resources/images/icons/complete.png";
import deleteImg from "../../resources/images/icons/delete.png";
import backImg from "../../resources/images/icons/back.png";
import resheduleImg from "../../resources/images/icons/reschedule.png";
import returnImg from "../../resources/images/icons/return.png"


const Task = (props) => {
    const {name, finishTask, deleteTask, rescheduleTask, backTask, status} = props;
    if(status === "future"){
        return(
            <div className='task'>
                <span>{name}</span>
                <div className="task-icons">
                    <img src={deleteImg} onClick={deleteTask}/>
                    <img src={backImg} onClick={backTask}/>
                </div>
            </div>
        )
    }else if(status === "current"){
        return(
            <div className='task'>
                <span>{name}</span>
                <div className="task-icons">
                    <img src={completeImg} onClick={finishTask} alt="complete"/>
                    <img src={deleteImg} onClick={deleteTask}/>
                    <img src={resheduleImg} onClick={rescheduleTask}/>
                </div>
            </div>
        )
    }else if(status === "finished") {
        return(
            <div className='task'>
                <span>{name}</span>
                <div className="task-icons">
                    <img src={deleteImg} onClick={deleteTask}/>
                    <img src={returnImg} onClick={backTask}/>
                </div>
            </div>
        )
    }
}


export default Task;