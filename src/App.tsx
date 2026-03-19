
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
        <section id = 'about'><About_me/></section>
        <section id = 'works'><Recent_works/></section>
        <section id = 'forms'> <Forms/></section>
        <section id = 'footer'><Footer/></section>
    </>
  )
}

export default App
