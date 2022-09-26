import './App.css';
import { Hero } from './components/Hero/Hero';
import { NavBar } from './components/NavBar/NavBar';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <div className="bg-sec  h-screen w-screen overflow-x-hidden">
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
