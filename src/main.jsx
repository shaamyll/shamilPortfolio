import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import {HeroUIProvider} from "@heroui/react";

createRoot(document.getElementById('root')).render(
<HeroUIProvider>
    <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
</HeroUIProvider>
)
