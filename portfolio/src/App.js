import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/NavBar';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Header/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
