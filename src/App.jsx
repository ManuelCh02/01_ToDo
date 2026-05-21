import { useState, useEffect } from 'react'

import { SideBar } from './components/SideBar.jsx'
import { Main } from './components/Main.jsx'

import './App.css'

function App() {
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
    <>
      <SideBar />
      <Main 
        useLocalStorage={useLocalStorage}
        tasksList={storedTasks}
      />
    </>
  )
}

export default App
