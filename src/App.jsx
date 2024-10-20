import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Protected from './components/Protected'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Logout from './pages/Logout.jsx'
import './App.css'

function App() {
  return (
    <>
     <div className='w-full h-screen bg-purple-300'>
          <BrowserRouter>
          <Routes>
             <Route path='/login' element={<Login/>}/>
             <Route path='/signup' element={<Signup/>}/>
             <Route path='/home' element={<Home/>}/>
             <Route path='/quiz' element={<Protected Component ={Quiz}/>}/>
             <Route path='/logout' element={<Logout/>}/>
             <Route path='/*' element={<Home/>}/>
          </Routes>
          </BrowserRouter>
     </div>
    </>
  )
}

export default App
