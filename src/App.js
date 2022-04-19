import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.component';
import Social from './components/social/social.components';
import Nav from './components/nav/nav.components';
import About from './pages/about/about.component';
import Design from './pages/design/design.component';
import Skills from './pages/skills/skills.component';

function App() {

  return (
    <div className='App'>
      <div className="nav-wrapper">
        <Nav />
      </div>
      <div className="main-body">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/designs' element={<Design />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </div>
      <div className="social-wrapper">
        <Social />
      </div>
    </div>
  );
}

export default App;
