import "./task.css";


const Task = (props) => {
    const {name, finishTask, deleteTask} = props;
    return(
        <div className='task'>
            <span>{name}</span>
            <div className="task-icons">
                <img src="images/icons/complete.png" onClick={finishTask}/>
                <img src="images/icons/delete.png" onClick={deleteTask}/>
                <img src="images/icons/reschedule.png"/>
            </div>
        </div>
    )
}


export default Task;