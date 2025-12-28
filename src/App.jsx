import { useEffect, useState } from 'react'
import './App.css'
import AnimatedBackground from './componentes/Background.jsx'
import Header from './componentes/Header.jsx'
import Main from './sections/Main-home.jsx'
import Sobre from './sections/SobreMim.jsx'
import Portifolio from './sections/Portifolio.jsx'
import Contato from './sections/Contato.jsx'
import Footer from './componentes/Footer.jsx'
import Intro from './componentes/Intro.jsx'
import { AnimatePresence } from "framer-motion";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && <Intro/>}
      </AnimatePresence>

      {!showIntro && (
        
        <>
        <AnimatedBackground />
        <Header />
        <Main/>
        <Sobre/>
        <Portifolio/>
        <Contato/>
        <Footer/>
        </>
           
      )}

    </>
  )
}

export default App
