import './App.css'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/About'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
    </Routes>
  )
}

export default App
