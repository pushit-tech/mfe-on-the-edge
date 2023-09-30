import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="bg-gray-800 text-white p-4">
        <a href="/shell"className="text-blue-500 hover:underline focus:underline focus:outline-none">Marvel</a>
        <span className="mx-2 text-gray-400">|</span>
        <a href="/shell/one-pice"className="text-blue-500 hover:underline focus:underline focus:outline-none">One Piece</a>
        <span className="mx-2 text-gray-400">|</span>
        <a href="/edge/pokemon" className="text-yellow-500 hover:underline focus:underline focus:outline-none">edge pokemon</a>
        <span className="mx-2 text-gray-400">|</span>
        <a href="/edge/rick-morty" className="text-yellow-500 hover:underline focus:underline focus:outline-none">edge rick-morty</a>
        <span className="mx-2 text-gray-400">|</span>
        <a href="/edge/vanilla" className="text-yellow-500 hover:underline focus:underline focus:outline-none">edge vanilla</a>
      </nav>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
