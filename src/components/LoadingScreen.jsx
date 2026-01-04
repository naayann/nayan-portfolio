import logo from '../assets/logo.jpg'

const LoadingScreen = () => {

  return (
    <div className='w-full h-full inset-0 bg-black fixed flex flex-col justify-center items-center z-1000'>
      <img src={logo} className='w-22 rounded-full' />
    </div>
  )
}

export default LoadingScreen
