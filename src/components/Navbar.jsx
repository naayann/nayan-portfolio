import logo from '../assets/logo.jpeg';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  return (
    <>
    <nav className='flex w-160 py-1 bg-blur/10 backdrop-blur-lg border border-blur/20 items-center justify-between rounded-4xl fixed top-6 left-1/2 -translate-x-1/2 z-900'>

      <div className='flex items-center p-2 ml-1.5'>
        <img src={logo} className='w-9 rounded-full'/>
        <p className='font-semibold text-text ml-2 text-lg'>naayann</p>
      </div>
      <div className='flex items-center'>
        <p className='text-text mr-4 text-lg' 
          onClick={ ()=> {
            setIsDark(!isDark)
          }
        }>
          { isDark ? (<i class="ri-sun-line"></i>) : (<i class="ri-moon-line"></i>)}
        </p>
        <button className='bg-text hover:bg-text/90 text-background transition-all ease rounded-4xl py-2 px-4 mr-3.5 font-semibold text-lg'>Connect</button>
      </div>
    </nav>
    </>
  )
}

export default Navbar
