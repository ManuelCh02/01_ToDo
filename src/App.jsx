import { SideBar } from './components/SideBar.jsx'
import { Main } from './components/Main.jsx'

import './App.css'

function App() {
  function useLocalStorage(value) {
    const stored = JSON.parse(localStorage.getItem('tasks') || '[]')
    stored.push(value)

    localStorage.setItem('tasks', JSON.stringify(stored))
  }


  return (
    <>
      <SideBar />
      <Main useLocalStorage={useLocalStorage}/>
    </>
  )
}

export default App
