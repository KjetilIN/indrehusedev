import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import MySkills from './components/MySkills';
import About from './components/About';

function App() {
  return (
    <div className="bg-sec  h-full">
      <Navbar/>
      <Hero/>
      <MySkills/>
      <About/>
    </div>
  );
}

export default App;
