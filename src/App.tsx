import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './component/features/post/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Post/>
    </>
  )
}

export default App
