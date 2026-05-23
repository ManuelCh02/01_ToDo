import { useState, useEffect, use } from 'react'

import { SideBar } from './components/SideBar.jsx'
import { Main } from './components/Main.jsx'

import { initDb } from './data/tasks.js'
import { getTable, saveTask, deleteTask } from './data/queries.js'

import './App.css'

function App() {
  const svgStyles = {
    color: "#71717a"
  }

  const [filteredTasks, setFilteredTasks] = useState([])
  const [storedTasks, setStoredTasks] = useState()
  const [dbTasks, setDbTasks] = useState([])
  let [totalTasks, setTotalTasks] = useState({
    completed: 0,
    total: 0
  })

  useEffect(() => {
    const loadTasks = async () => {
    const result = await getTable()
      setDbTasks(result.rows)
      setTotalTasks({ completed: 0, total: result.rows.length })
    }

    loadTasks()
    }, [])

  const useLocalStorage = async (task) => {
    await saveTask(task)              
    const result = await getTable()   
    setDbTasks(result.rows)
    setTotalTasks(totalTasks.total += 1)
  }

  async function deleteTaskFromlocal (taskId) {
     await deleteTask(taskId)          
      const result = await getTable()
      setDbTasks(result.rows)
      setTotalTasks(totalTasks.total -= 1)
  }

  const handleTaskSearching = (input) => {
    const cleanInput = input.trim().toLowerCase()

    if (!cleanInput) {
      setFilteredTasks([])
      return
    }


    const result = dbTasks.filter(task => {
      return task.value.trim().toLowerCase().includes(cleanInput)
    })

    setFilteredTasks(result)
  }

  const handleTaskCounter = (count) => {
    setTotalTasks(prev => ({ ...prev, completed: count }))
  }

  return (
    <div className='app'>
      <SideBar 
        handleTaskSearching={handleTaskSearching}
        tasks={filteredTasks}
        deleteTaskFromlocal={deleteTaskFromlocal}
      />
      <Main 
        useLocalStorage={useLocalStorage}
        tasksList={dbTasks}
        colors={svgStyles}
        deleteTaskFromlocal={deleteTaskFromlocal}
        totalTasks={totalTasks}
        handleTaskCounter={handleTaskCounter}
      />
    </div>
  )
}

export default App
