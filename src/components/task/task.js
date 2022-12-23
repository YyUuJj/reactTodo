import "./task.css";


const Task = (props) => {
    const name = props.name;
    return(
        <div className='task'>
            <span>{name}</span>
            <div className="task-icons">
                <img src="images/icons/complete.png"/>
                <img src="images/icons/delete.png"/>
                <img src="images/icons/reschedule.png"/>
            </div>
        </div>
    )
}


export default Task;