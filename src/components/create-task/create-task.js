import React from "react";

import './create-task.css';



const CreateTask = (props) => {

    const {addTask, changeName} = props;
    return (
        <form onSubmit={addTask} name='myForm'>
            <input type='text'
            placeholder="Введите наименование задачи"
            onChange={changeName}/>
            <button>Добавить</button>
        </form>
    )
};

export default CreateTask;