import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/search/:searchTerm" element={<HomePage />}/>
      <Route path="/tag/:tag" element={<HomePage />}/>
    </Routes>
  )
}

export default AppRoutes