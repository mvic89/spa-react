import { useState} from 'react'
import Home from './pages/Home'
import Games from './pages/Games'
import Consoles from './pages/Consoles'
function App() {
  const [currentPage, setCurrentPage] = useState(null)
  return (
    <>

      <nav className='nav'>
        <li onClick={() => setCurrentPage(null)}>Home</li>
        <li onClick={() => setCurrentPage(<Consoles/>)}>Console</li>
        <li onClick={() => setCurrentPage(<Games/>)}>Games</li>
      </nav>
      

      {currentPage === null ? <Home/> : currentPage}
    </>
  )
}

export default App
