import { Component } from 'react';
import './App.css';
import CreateTask from './components/create-task/create-task';
import CurrentTask from './components/current-task/current-task';
import Finished from './components/finshed-task/finished-task';
import FutureTask from './components/future-task/future-task';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {id: 1, name: "test", status: "current"},
        {id: 2, name: "test2", status: "finished"},
        {id: 3, name: "test3", status: "future"}
      ],
      nameValue: ""
    };
    this.maxId = this.state.tasks.length+1;
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
    this.setState(({tasks}) => ({
      tasks: tasks.map(item => {
          if (item.id === id) {
              return {...item, status: "finished"};
          }
          return item;
      })
    }));
  }

  deleteTask = (id) => {
    this.setState(({tasks}) => {
      return {
        tasks: tasks.filter(item => item.id !== id )
      }
    })
  }

  
  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  } 

  backTask = (id) => {
    this.setState(({tasks}) => ({
      tasks: tasks.map(item => {
          if (item.id === id) {
              return {...item, status: "current"};
          }
          return item;
      })
    }));
};

  rescheduleTask = (id) => {
    this.setState(({tasks}) => ({
      tasks: tasks.map(item => {
          if (item.id === id) {
              return {...item, status: "future"};
          }
          return item;
      })
    }));
  }


  render () {
    return(
      <div className="App">
        <h1>TODO LIST</h1>
        <CreateTask 
          addTask={this.addTask}
          changeName={this.changeName}/>
        <div className='app_list'>
          <CurrentTask data={this.state.tasks} finishTask={this.finishTask} deleteTask={this.deleteTask} rescheduleTask={this.rescheduleTask}/>
          <Finished data={this.state.tasks} deleteTask={this.deleteTask} backTask={this.backTask}/>
          <FutureTask data={this.state.tasks} deleteTask={this.deleteTask} backTask={this.backTask}/>
        </div>
      </div>
    )
  }
};

export default App;
