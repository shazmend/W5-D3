import './App.css'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/HomePage'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import Details from './pages/Details'


function App() {
  return (
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/home'>
        <Route path='' element={<Home/>}/>  
        <Route path='details' element={<Details/>}/>  
      </Route>  
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  )
}

export default App
