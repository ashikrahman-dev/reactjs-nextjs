import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import ByCategoryPage from './pages/ByCategoryPage'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bycategory/:id" element={<ByCategoryPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
