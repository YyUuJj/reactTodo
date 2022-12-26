import "./finished-task.css";
import Task from "../task/task";


const FinishedTask = ({data, finishTask}) => {
    const elements = data.map(item=>{
        if(item.status === 'finished'){
            return (
                <Task name={item.name} key={item.id}/>
            )
        }
    })
    return (
        <div className="finishedTask">
            <div className="finishedTask__head">
                <h1>Задачи</h1>
            </div>
            <div className="finishedTask__list">
                {elements}
            </div>
        </div>
    )
}


export default FinishedTask;