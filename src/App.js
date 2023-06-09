import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState ([
  {
    id: 1,
    text:'Doctors Apointment',
    day: 'Feb 5th at 2.30pm',
    remainder: true,
  },
  {
    id: 2,
    text:'Meeting at school',
    day: 'Feb 6th at 1.30pm',
    remainder: true,
  },
  {
    id: 3,
    text:'Food Shopping',
    day: 'Feb 5th at 2.30pm',
    remainder: false
  }
])

// Delete Task
const deleteTask = (id) => {
 setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Remainder
const toggleRemainder = (id) => {
  setTasks(tasks.map((task) => 
          task.id === id ? {...task, remainder: !task.remainder} : task))
}

  
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ?(<Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleRemainder} />) : ('No Tasks To Show')}
    </div>
  )
}

export default App;
