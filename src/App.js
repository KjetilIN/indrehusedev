import './App.css';
import { Hero } from './components/Hero/Hero';
import { NavBar } from './components/NavBar/NavBar';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';



function App() {
  return (
    <div className="bg-sec px-3 overflow-hidden">
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      
      <Footer/>
    </div>
  );
}

export default App;
