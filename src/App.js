import './App.css';
import { Hero } from './components/Hero/Hero';
import { NavBar } from './components/NavBar/NavBar';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';


function App() {
  return (
    <div className="bg-sec  h-screen w-screen">
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
