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
  const [totalTasks, setTotalTasks] = useState(0)

  useEffect(() => {
    const loadTasks = async () => {
    const result = await getTable()
      setDbTasks(result.rows)
      setTotalTasks(result.rows.length)
    }

    loadTasks()
    }, [])

  const useLocalStorage = async (task) => {
    await saveTask(task)              
    const result = await getTable()   
    setDbTasks(result.rows)
  }

  async function deleteTaskFromlocal (taskId) {
     await deleteTask(taskId)          
      const result = await getTable()
      setDbTasks(result.rows)
  }

  const handleTaskSearching = (input) => {
    const cleanInput = input.trim().toLowerCase()

    if (!cleanInput) {
      setFilteredTasks([])
      return
    }


    const result = storedTasks.filter(task => {
      return task.value.trim().toLowerCase().includes(cleanInput)
    })

    setFilteredTasks(result)
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
      />
    </div>
  )
}

export default App
