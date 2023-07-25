import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Components/Navbar'
import ToDoList from './assets/Components/TodoList'
import TaskInput from './assets/Components/taskInput'
import TodoItem from './assets/Components/TodoItem'
import ProDucts from './assets/Components/products'

function App() {
  const [taskList, setTasktList] = useState([
  {
    taskName : 'Do laundry'
  },
  {
    taskName : 'Gaming'
  }
]);

const todoItemList = taskList.map(
  task => <TodoItem key={task.id} taskName={task.taskName} addTask={addTask} />
)

  function addTask(taskName) {
    const taskObj = {
      id: taskList.length + 1,
      taskName,
    }

    setTasktList([...taskList, taskObj])
  }

  return (
    <>
    <Navbar />
    <ToDoList />
    <TaskInput addTask={addTask}/>
    
    <br />
    { todoItemList} 
    <ProDucts />
    </>
  )
}

export default App
