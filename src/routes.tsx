import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Shorts from './Pages/Shorts'
import Uploads from './Pages/Uploads'
import PageVideos from './Pages/Videos'
import './global.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="uploads" element={<Uploads />} />
        <Route path="page-videos/:id" element={<PageVideos />} />
        <Route path="shorts/:id" element={<Shorts />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
