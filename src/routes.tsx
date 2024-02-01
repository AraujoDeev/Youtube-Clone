import Home from './Pages/Home'
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
      </Routes>
    </Router>
  )
}

export default App
