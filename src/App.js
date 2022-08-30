
/* import Nav from './Components/Nav.jsx.js';
import Main from './Components/Home.jsx.js';
import About from './Components/AboutMe.jsx.js';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Pag404 from './Components/Pag404'; */
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Routes>
        <Route exact path="/" 
          element={
          <>
            <h1>Prueba</h1>
            {/* <Nav/>
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/> */}
          </>
          } />

        {/* <Route path="/" component={Pag404} />  */}
      </Routes> 
    </div>
  );
}

export default App;
