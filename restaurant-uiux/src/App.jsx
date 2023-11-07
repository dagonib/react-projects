import './App.css'
import { Navbar } from './components'
import { 
  AboutUs, 
  Chef, 
  FindUs, 
  Footer, 
  Gallery, 
  Header, 
  Intro, 
  Laurels, 
  SpecialMenu 
} from './containers'

function App() {

  return (
    <main>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </main>
  )
}

export default App
