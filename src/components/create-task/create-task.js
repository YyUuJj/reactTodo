import './create-task.css';



const CreateTask = (props) => {

    const {addTask, changeName} = props;
    return (
        <form>
            <input type='text'
            placeholder="Введите наименование задачи"
            onChange={changeName}/>
            <button onClick={addTask}>Добавить</button>
        </form>
    )
};

export default CreateTask;