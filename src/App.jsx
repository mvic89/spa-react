import { useState} from 'react'
import Home from './pages/Home'
import Games from './pages/Games'
import Consoles from './pages/Consoles'
import { getImageUrl } from './utils/functions'


function App() {
  const [currentPage, setCurrentPage] = useState(null)
  return (
    <>
      <div className='header'>
        <img className='logotype' src={getImageUrl('sega.png')} />
        <nav className='nav'>
          <li onClick={() => setCurrentPage(null)}>Home</li>
          <li onClick={() => setCurrentPage(<Consoles/>)}>Console</li>
          <li onClick={() => setCurrentPage(<Games/>)}>Games</li>
        </nav>
      </div>
      

      {currentPage === null ? <Home/> : currentPage}
    </>
  )
}

export default App
