
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PortfolioComponents from './portfolioComponents';
import Header from './components/header';
import Footer from './components/footer';
import Skills from './components/skills';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
function App() {
  return (

<BrowserRouter>
<Header/>
  <Routes>
    <Route path='/' element={<PortfolioComponents/>}/>
 <Route path="skills" element={<Skills/>}/>
 <Route path="about" element={<About/>}/>
 <Route path="contact" element={<Contact/>}/>
 <Route path="projects" element={<Projects/>}/>
  </Routes>
  <Footer/>
</BrowserRouter>

  );
}

export default App;
