import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/img/logo.png';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Experience } from './components/Experience';
import { About } from './components/About';


function App() {
  return (
    <div className="App">
     
      <NavBar />
      <Banner />
      <About/>
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
