import AppNavbar from "./components/navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/homepage"

function App() {

  return (
    <BrowserRouter>
    <AppNavbar />
    <Routes>
      <Route path='/' element={<HomePage />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
