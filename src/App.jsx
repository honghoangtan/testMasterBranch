
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dashboar from './pages/Dashboar'
import Login from './pages/Login'
import Signup from './pages/Signup'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBznhdWLclpMGLbRHDoVYhtpz6JX2ZjSMw",
  authDomain: "authentication1-891de.firebaseapp.com",
  projectId: "authentication1-891de",
  storageBucket: "authentication1-891de.appspot.com",
  messagingSenderId: "350047289031",
  appId: "1:350047289031:web:3788c2a1fc992f319a48e2"
};

initializeApp(firebaseConfig);

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/services' element={<Services />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} /> */}

          <Route path='/login' element={<Login />} />

          <Route path='/signup' element={<Signup />} />

          <Route path='/dashboar' element={<Dashboar />} />

        </Routes>
    </>
  )
}

export default App
