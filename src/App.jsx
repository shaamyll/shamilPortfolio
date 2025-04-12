import {useState} from 'react';
import './App.css'

import Potfolio from './assets/Pages/Potfolio';


function App() {
  const [darkMode, setDarkMode] = useState(false);  // Dark mode state

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>

<Potfolio/>
    </>
  );
}

export default App
