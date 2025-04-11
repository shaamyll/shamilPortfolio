import {useState} from 'react';

import './App.css'
import Header from './assets/components/Header/Header';
import Home from './assets/components/Home/Home';
import Footer from './assets/components/Footer/Footer';
import Error from './assets/components/Error/Error';
import { Route, Routes } from 'react-router-dom'
import Contact from './assets/components/Contact/Contact';
import About from './assets/components/About/About';
import Work from './assets/components/Work/Work';
import Potfolio from './assets/Pages/Potfolio';


function App() {
  const [darkMode, setDarkMode] = useState(false);  // Dark mode state

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>

<div style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000', minHeight: '100vh' }}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path='/' element={<Potfolio/>}/>
        <Route path='/*' element={<Error />} />
        <Route path='/about' element={<About darkMode={darkMode} />} />
        <Route path='/work' element={<Work/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer darkMode={darkMode} />
    </div>
    </>
  );
}

export default App
