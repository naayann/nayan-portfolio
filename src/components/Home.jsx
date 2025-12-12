import Profile from '../assets/Profile.jpg'
import Button from './Button'

const Home = () => {
  return (
    <main className='h-screen flex flex-col items-center mt-35'>
      <img src={Profile} className='w-60 rounded-full relative'/>
      <div>
        <p className="flex items-center justify-center bg-[#0e1015] p-2 rounded-2xl absolute top-35 right-180">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>
        </p>
      </div>
      <h1 className='text-white text-5xl font-medium p-2'>Nayan Sarania</h1>
      <p className='text-white/80 text-md'>Frontend Developer</p>
      <div className='flex gap-2 p-4'>
      <Button button={"Resume"}/>
      <Button button={"Github"}/>
      </div>
    </main>
  )
}

export default Home
