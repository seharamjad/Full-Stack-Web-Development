import AppNavbar from "./components/navbar"
import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import AddStudentPage from "./pages/addStudentPage"
import EditStudentPage from "./pages/EditStudentPage"

function App() {

  return (
    <BrowserRouter>
    <AppNavbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/add-student' element={<AddStudentPage />} />
      <Route path='/edit-student/:id' element={<EditStudentPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
