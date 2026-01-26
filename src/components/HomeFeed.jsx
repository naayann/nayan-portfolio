import React from 'react'
import { Download, Github, Send, Twitter } from 'lucide-react'

const HomeFeed = () => {
  return (
    <>
      {/* Main Content */}
      <div className='mt-40'>
        <div>
          <div className='flex gap-4 items-end'>
          <div>
            <img src="/profile.jpg" alt="Nayan Sarania" className='w-30 h-30 rounded-2xl ring-1 ring-gray-500 p-1' />
          </div>
            <div>
              <h1 className='font-bold text-3xl text-white'>Nayan Sarania</h1>
              <p className='text-sm text-white/70'>20 • Front-End Developer • React Enthusiast</p>
            </div>

          </div>
        </div>
      </div>

      {/* About Section */}
      <div className='mt-8 mb-10'>
        <h2 className='font-bold text-xl'>
          Who am I?
        </h2>
        <p className='tracking-wider mt-2'>
          I’m a frontend developer based in India, building high-performance React
          applications with a strong focus on user experience. Currently open to new
          opportunities.
        </p>

        <div className='flex gap-2 mt-4'>
        <button className='flex gap-1 border border-gray-500 py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200'>
          <Download className='w-4'/>
          Download CV
        </button>
        <button className='flex gap-1 border text-black border-gray-500 py-2 px-4 rounded-xl bg-white/80 hover:bg-white transition-colors duration-200'>
          <Send className='w-4'/>
          Send an email
        </button>
        </div>
      </div>

    </>
  )
}

export default HomeFeed
