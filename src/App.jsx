import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import NavBar2 from './components/NavBar2'
import HomeFeed from './components/HomeFeed'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

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
          <div className="container w-200 mx-auto">
            <div>
              <NavBar2 />
            </div>
            <div className='flex flex-col'>
              <HomeFeed />
              <Projects />
              <Skills />
              <Experience />
              <Contact />
            </div>
          </div>
        </>
      }
    </>
  )
}

export default App
