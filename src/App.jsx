
import './App.css'
import AnimatedBackground from './componentes/Background.jsx'
import Header from './componentes/Header.jsx'
import Main from './sections/Main-home.jsx'
import Sobre from './sections/SobreMim.jsx'
import Portifolio from './sections/Portifolio.jsx'
import Contato  from './sections/Contato.jsx'
import Footer from './componentes/Footer.jsx'

function App() {

  return (
    <>
      <Header></Header>
      <AnimatedBackground/>
      <Main></Main>
      <Sobre></Sobre>
      <Portifolio></Portifolio>
      <Contato></Contato>
      <Footer></Footer>
    </>
  )  
}

export default App
