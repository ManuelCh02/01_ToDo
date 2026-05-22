import { useState, useEffect } from 'react'

import { SideBar } from './components/SideBar.jsx'
import { Main } from './components/Main.jsx'

import './App.css'

function App() {
  const svgStyles = {
    color: "#71717a"
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

  function deleteTaskFromlocal (taskId) {
    const getLocalStorage = JSON.parse(localStorage.getItem('tasks') || '[]')
    const updatedTasks = getLocalStorage.filter(task => task.id !== taskId)

    setStoredTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  return (
    <div className='app'>
      <SideBar />
      <Main 
        useLocalStorage={useLocalStorage}
        tasksList={storedTasks}
        colors={svgStyles}
        deleteTaskFromlocal={deleteTaskFromlocal}
      />
    </div>
  )
}

export default App
