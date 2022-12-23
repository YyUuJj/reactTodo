import "./current-task.css";
import Task from "../task/task";


const CurrentTask = ({data}) => {
    const elements = data.map(item=>{
        return (
            <Task name={item.name} key={item.id}/>
        )
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