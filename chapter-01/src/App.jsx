import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import ByCategoryPage from './pages/ByCategoryPage'
import DetailsPage from "./pages/DetailsPage"

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bycategory/:id" element={<ByCategoryPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
