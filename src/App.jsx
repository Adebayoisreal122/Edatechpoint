import { useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/> }>
          <Route path='/' element={<Home/>}/>
          <Route path='/OurServices' element={<Service/>}/>
          <Route path='/ContactUs' element={<Contact/>}/>
          <Route path='/AboutUs' element={<About/>}/>
        </Route>
        
      </Routes>
    </>
  )
}

export default App
