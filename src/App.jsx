import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import LoadingScreen from './components/overlays/LoadingScreen'
import SmoothFollower from './components/overlays/SmoothFollower'
import DevToast from './components/overlays/DevToast'
import ProjectPage from './components/pages/ProjectPage'
import ComponentLibrary from './components/pages/ComponentLibrary'
import BlogsPage from './components/pages/BlogsPage'
import ConceptWorksPage from './components/pages/ConceptWorks'
import CaseStudiesPage from './components/pages/CaseStudies'
import HomeFeed from './components/pages/HomeFeed'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1800)
  }, [])

  return (
    <>
      {isLoading ?
        <LoadingScreen /> :
        <>
          <div className="container w-full md:w-200 mx-auto md:border-l md:border-r border-border/50 border-dashed p-4">
            <div className='flex flex-col'>
              <SmoothFollower />
              <DevToast />

              <Routes>

                <Route index element={<HomeFeed />} />

                <Route path='/project/:id' element={<ProjectPage />}></Route>
                <Route path='/blogs' element={<BlogsPage />}></Route>
                <Route path='/componentlib' element={<ComponentLibrary />}></Route>
                <Route path='/conceptwork' element={<ConceptWorksPage />}></Route>
                <Route path='/casestudy' element={<CaseStudiesPage />}></Route>
                <Route path='*' element={<div className="text-center text-white py-20">Page Not Found</div>} />

              </Routes>


            </div>
          </div>
        </>
      }
    </>
  )
}

export default App
