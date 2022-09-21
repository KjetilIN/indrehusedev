import './App.css';
import { Hero } from './components/Hero/Hero';
import { NavBar } from './components/NavBar/NavBar';
import { About } from './components/About/About';


function App() {
  return (
    <div className="bg-sec  h-screen w-screen">
      <NavBar/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
