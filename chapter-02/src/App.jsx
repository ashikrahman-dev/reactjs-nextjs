import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/HomePage'
import Login from './pages/Login'
import Otp from './pages/Otp'

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='login' element={<Login />} />
          <Route path='otp' element={<Otp />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
