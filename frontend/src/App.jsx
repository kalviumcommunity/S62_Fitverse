// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center text-white">
      <div className="text-center space-y-6 p-8 max-w-lg border border-white/20 rounded-lg shadow-lg bg-white/10">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Welcome to the Landing Page
        </h1>
        <p className="text-lg">
          Your innovative idea starts here! Join us in bringing this project to life and making a real difference.
        </p>
        <button
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
          onClick={() => alert("Learn More about the ASAP Project!")}
        >
          Learn More
        </button>
      </div>
    </div>
    </>
  )
}

export default App
