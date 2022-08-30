
import Nav from './Views/Components/Nav.jsx';
import Main from './Views/Components/Home.jsx';
import About from './Views/Components/AboutMe.jsx';
import Skills from './Views/Components/Skills';
import Projects from './Views/Components/Projects';
import Contact from './Views/Components/Contact';
import Footer from './Views/Components/Footer';
import Pag404 from './Views/Components/Pag404';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Routes>
        <Route exact path="/" 
          element={
          <>
            <Nav/>
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
          </>
          } />

        <Route path="/" component={Pag404} /> 
      </Routes> 
    </div>
  );
}

export default App;
