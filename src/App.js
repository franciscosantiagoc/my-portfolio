
import Nav from './Views/Components/Nav.jsx';
import Main from './Views/Components/Home.jsx';
import About from './Views/Components/AboutMe.jsx';
import Skills from './Views/Components/Skills';
import Projects from './Views/Components/Projects';
import Contact from './Views/Components/Contact';
import Footer from './Views/Components/Footer';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Nav/>
       <Switch>
        
        <Route exact path="/" > 
          <Main/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
        </Route>

        <Route path="/" /> 
      </Switch> 
    </div>
  );
}

export default App;
