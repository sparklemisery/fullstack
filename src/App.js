import { Routes, Route, Link } from 'react-router-dom'
import { Home, About } from './pages'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>

        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App