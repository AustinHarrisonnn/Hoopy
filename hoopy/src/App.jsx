import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import TeamSelector from './pages/TeamSelector'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/teamselector" element={<TeamSelector />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

