import { Component } from 'react';
import './App.css';
import CreateTask from './components/create-task/create-task';
import CurrentTask from './components/current-task/current-task';
import Finished from './components/finshed-task/finished-task';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {id: 1, name: "test", status: "finished"}
      ],
      nameValue: ""
    };
    this.maxId = 2;
  }

  addTask = (e) => {
    e.preventDefault();
    console.log(e.parentNode);
    if(this.state.name.length >= 5) {
      const newTask = {
        id: this.maxId++,
        name: this.state.name,
        status: 'current'
      }
      const newArr = [...this.state.tasks, newTask]
      this.setState({
        tasks: newArr
      })
      // document.myForm.reset();
      e.target.reset();
      console.log(e)
    }else {
      alert("Вы ввели слишком короткую задачу")
    }
  }

  finishTask = (id) => {
    alert("Задача завершена!" + id);
    this.setState(({tasks}) => ({
      tasks: tasks.map(item => {
          if (item.id === id) {
              return {...item, status: "finished"};
          }
          return item;
      })
    }))

  }
  
  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  } 

  render () {
    return(
      <div className="App">
        <h1>TODO LIST</h1>
        <CreateTask 
          addTask={this.addTask}
          changeName={this.changeName}/>
        <div className='app_list'>
          <CurrentTask data={this.state.tasks} finishTask={this.finishTask}/>
          <Finished data={this.state.tasks}/>
        </div>
      </div>
    )
  }
};

export default App;
