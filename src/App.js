import { Component } from 'react';
import './App.css';
import CreateTask from './components/create-task/create-task';
import CurrentTask from './components/current-task/current-task';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {id: 1, name: "test", status: "current"}
      ],
      nameValue: ""
    };
    this.maxId = 2;
  }

  addTask = (e) => {
    e.preventDefault();
    if(this.state.name > 5) {
      const newTask = {
        id: this.maxId++,
        name: this.state.name
      }
      const newArr = [...this.state.tasks, newTask]
      this.setState({
        tasks: newArr
      })
    }else {
      alert("Вы ввели слишком короткую задачу")
    }
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
        <CurrentTask data={this.state.tasks}/>
      </div>
    )
  }
};

export default App;
