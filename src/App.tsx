import About from "./components/About/About"
import Intro from "./components/Intro/Intro"
import Navbar from "./components/Navbar/Nav"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Contact from "./components/contact/Contact"

function App() {

  return (
    <div className="font-['Ysabeau_Infant'] ">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
