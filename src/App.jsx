import { useState, useEffect, use } from 'react'

import { SideBar } from './components/SideBar.jsx'
import { Main } from './components/Main.jsx'

import { initDb } from './data/tasks.js'
import { getTable, saveTask, deleteTask, updateCompletedQuery, filterTasksByLabel } from './data/queries.js'

import './App.css'

function App() {
  const svgStyles = {
    color: "#71717a"
  }

  const [filteredTasks, setFilteredTasks] = useState([])
  const [storedTasks, setStoredTasks] = useState()
  const [dbTasks, setDbTasks] = useState([])
  let [totalTasks, setTotalTasks] = useState({})

  useEffect(() => {
    const loadTasks = async () => {
        const result = await getTable()
        setDbTasks(result.rows)
        setTotalTasks({
            total: result.rows.length,
            completed: result.rows.filter(task => task.completed === 1).length // 👈
        })
    }

    loadTasks()
}, [])

  const useLocalStorage = async (task) => {
    await saveTask(task)              
    const result = await getTable()   
    setDbTasks(result.rows)
    setTotalTasks(prev => ({ ...prev, total: prev.total + 1 }))
  }

  async function deleteTaskFromlocal (taskId) {
     await deleteTask(taskId)          
      const result = await getTable()
      setDbTasks(result.rows)
      setTotalTasks(prev => ({ ...prev, total: prev.total - 1 }))
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

  const completedCount = dbTasks.filter(task => task.completed === 1).length
  const totalCount = dbTasks.length

  const handleToggleCheck = async (checked, id) => {
    await updateCompletedQuery(checked, id)
    const result = await getTable() 
    setDbTasks(result.rows)   
  }

  const getTasksByLabel = async (value) => {
    const result = await filterTasksByLabel(value)
    setDbTasks(result.rows)
  } 

  return (
    <div className='app'>
      <SideBar 
        handleTaskSearching={handleTaskSearching}
        tasks={filteredTasks}
        deleteTaskFromlocal={deleteTaskFromlocal}
        handleToggleCheck={handleToggleCheck}
      />
      <Main 
        useLocalStorage={useLocalStorage}
        tasksList={dbTasks}
        colors={svgStyles}
        deleteTaskFromlocal={deleteTaskFromlocal}
        totalTasks={{ total: totalCount, completed: completedCount }}
        handleToggleCheck={handleToggleCheck}
        getTasksByLabel={getTasksByLabel}
      />
    </div>
  )
}

export default App
