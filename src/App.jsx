
import './App.css'
import Header from './layouts/Header/Header'

import { Routes, Route } from 'react-router-dom'

import Hello from './component/Hello'
import Services from './layouts/Services/Services'
import Resume from './layouts/Resume/Resume'
import Work from './layouts/Work/Work'
import Contact from './layouts/Contact/Contact'
import PageTransition from './component/PageTransition'
import StairEffect from './component/StairEffect'


function App() {

  return (
    <>
      <Header />

      <StairEffect />

      <PageTransition>
        <Routes>
          <Route path='/' element={<Hello />} />
          <Route path='/services' element={<Services />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </PageTransition>

    </>
  )
}

export default App
