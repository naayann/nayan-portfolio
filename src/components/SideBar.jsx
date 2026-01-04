import logo from '../assets/logo.jpg'

const Navbar = () => {

  return (
    <div className='flex flex-col gap-5 mr-15'>
      <img src={logo} className='w-10 invert ml-3' />
      <div className='flex flex-col items-start gap-2'>
        <button
          className='rounded-4xl hover:bg-gray-200 transition-colors duration-200 ease px-5 py-2 text-[20px] font-medium'>
          <span>
            <i class="ri-home-5-line pr-2"></i>
          </span>
          Home
        </button>
        <button
          className='rounded-4xl hover:bg-gray-200 transition-colors duration-200 ease px-5 py-2 text-[20px] font-medium'>
          <span>
            <i class="ri-apps-line pr-2"></i>
          </span>
          Projects
        </button>
        <button
          className='rounded-4xl hover:bg-gray-200 transition-colors duration-200 ease px-5 py-2 text-[20px] font-medium'>
          <span>
            <i class="ri-information-2-line pr-2"></i>
          </span>
          About
        </button>
        <button
          className='rounded-4xl hover:bg-gray-200 transition-colors duration-200 ease px-5 py-2 text-[20px] font-medium'>
          <span>
            <i class="ri-contacts-line pr-2"></i>
          </span>
          Contact
        </button>
      </div>
      <button className='px-6 py-2 bg-black text-white rounded-4xl text-[20px] font-medium absolute bottom-8'>Get in touch</button>
    </div>
  )
}

export default Navbar
