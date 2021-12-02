
import Nav from './Views/Components/Nav.jsx';
import Main from './Views/Components/Home.jsx';
import About from './Views/Components/AboutMe.jsx';
import Skills from './Views/Components/Skills';
import Projects from './Views/Components/Projects';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <Routes>
        
        <Route exact path="/"> */}
          
          <Main/>
          <About/>
          <Skills/>
          <Projects/>
        {/* </Route>
      </Routes> */}
    </div>
  );
}

export default App;
