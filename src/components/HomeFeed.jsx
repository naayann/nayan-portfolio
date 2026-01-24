import React from 'react'
import { Download, Github, Twitter } from 'lucide-react'

const HomeFeed = () => {
  return (
    <>
      {/* Main Content */}
      <div className='mt-20'>
        <div>
          <div>
            <img src="/profile.jpg" alt="Nayan Sarania" className='w-30 h-30' />
          </div>

          <div className='flex w-full justify-between items-center'>
            <div>
              <h1 className='font-bold text-5xl text-white py-2'>Nayan Sarania</h1>
              <p className='text-md text-white/70 tracking-wide'>20 • Front-End Developer • React Enthusiast</p>
            </div>

            <div>
              <div className='flex gap-2'>
                <a href="">
                  <button className='hover:bg-white/10 text-white p-2 rounded-full ring-1 ring-white/50'>
                    <Twitter />
                  </button>
                </a>
                <a href="">
                  <button className='hover:bg-white/10 text-white p-2 rounded-full ring-1 ring-white/50'>
                    <Github />
                  </button>
                </a>
                <button
                  className='flex font-medium items-center gap-1 text-md bg-white hover:bg-white/90 text-black px-4 py-2 rounded-2xl'
                >
                  Resume
                  <Download className='w-4 h-4' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className='mt-8 mb-10'>
        <h2 className='font-bold text-xl'>
          Who am I?
        </h2>
        <p className='tracking-wider'>
          I’m a frontend developer based in India, building high-performance React
          applications with a strong focus on user experience. Currently open to new
          opportunities.
        </p>
      </div>

    </>
  )
}

export default HomeFeed
