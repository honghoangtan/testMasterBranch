
import './App.css'
import Header from './layouts/Header/Header'
import Scroll from './pages/Scroll/Scroll'
import Technology from './pages/Technology/Technology'
import Blog from './pages/Blogs/Blog'
import Signals from './pages/Signals/Signals'
import Trader from './pages/Trader/Trader'
import Contact from './pages/Contact/Contact'
import Footer from './layouts/Footer/Footer'

// import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Header />
      <Technology />
      <Scroll />
      <Blog />
      <Signals />
      <Trader />
      <Contact />
      <Footer />

      {/* <Routes>
        <Route path='/about' element={<Scroll />} />
      </Routes> */}
    </>
  )
}

export default App
