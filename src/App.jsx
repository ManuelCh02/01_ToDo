import { useState, useEffect } from 'react'

import { SideBar } from './components/SideBar.jsx'
import { Main } from './components/Main.jsx'

import './App.css'

function App() {
  const colors = {
    mutedForeground: "#71717a"
  }

  const [storedTasks, setStoredTasks] = useState()


  function useLocalStorage(task) {
    const newTask = {
      id: crypto.randomUUID(),
      value: task.value,
      labels: task.labels
    }

    const stored = JSON.parse(localStorage.getItem('tasks') || '[]')
    stored.push(newTask)

    localStorage.setItem('tasks', JSON.stringify(stored))

    setStoredTasks(stored)
  }



  return (
    <div className='app'>
      <SideBar />
      <Main 
        useLocalStorage={useLocalStorage}
        tasksList={storedTasks}
        colors={colors}
      />
    </div>
  )
}

export default App
