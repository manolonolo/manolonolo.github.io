import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import Welcome from './Components/Welcome';
import Nav from './Components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Header />
    </div>
  );
}

export default App;
