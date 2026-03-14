
import './App.css'
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About_me from "./components/About_me.tsx";
import Recent_works from "./components/Recent_works.tsx";
import Forms from "./components/Forms.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  return (
    <>
        <Header/>
        <Hero/>
        <About_me/>
        <Recent_works/>
        <Forms/>
        <Footer/>
    </>
  )
}

export default App
