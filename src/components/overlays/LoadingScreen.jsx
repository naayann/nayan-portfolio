const LoadingScreen = () => {
  return (
    <div className="w-full h-full inset-0 bg-black fixed flex justify-center items-center z-50">
      <img
        src="/logo.jpg"
        alt="Logo"
        className="w-24 h-24 rounded-full pulse-anim"
      />
    </div>
  )
}

export default LoadingScreen
