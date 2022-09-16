import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import MySkills from './components/MySkills';

function App() {
  return (
    <div className="bg-sec  h-full">
      <Navbar/>
      <Hero/>
      <MySkills/>
    </div>
  );
}

export default App;
