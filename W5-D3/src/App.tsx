import './App.css'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/About'
import NotFound from './pages/NotFound'
import AboutElement from './pages/AboutElement'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about'>
          <Route path='' element={<About/>}/>
          <Route path='info' element={<AboutElement/>}/>    
      </Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  )
}

export default App
