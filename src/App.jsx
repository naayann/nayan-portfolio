import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import LoadingScreen from './components/LoadingScreen'
import Projects from './components/Projects'
import { useEffect, useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
  }, [])

  return (
    <>
      {isLoading ?
        <LoadingScreen /> :
        <>
          <Navbar />
          <Home />
          <Projects />
        </>}
    </>
  )
}

export default App
