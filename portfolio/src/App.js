import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/NavBar';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Header />
      <Skills />
      <Projects/>
    </div>
  );
}

export default App;
