import Home from "./components/Home"
import Navbar from "./components/Navbar"
import News from "./components/News"
import Secciones from "./components/Secciones"

function App() {

  return (
    <div className="max-w-[1440px] mx-auto relative" >
      <Navbar />
      <div className="md:flex">
        <Home />
        <News />
      </div>
      <Secciones/>
    </div>
  )
}

export default App
