import './App.css';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import Videobackground from './components/Videobackground';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from './components/Projects'
import Aboutme from './components/Aboutme'
import Contactme from './components/Contactme'
function App() {
  return (
    <>
    <div className="App">
      {/* <Videobackground/> */}
      <Router>
      <div className='Navbar'>
        <Navbar/>
      </div>
      <div className='content'>
        <div className="routes">
            <Routes>
              <Route 
                exact 
                path="/"
                element={<Introduction/>}
              ></Route>
              <Route
                exact
                path="/projects"
                element={<Projects />}
              ></Route>
              <Route
                exact
                path="/About"
                element={<Aboutme/>}
              ></Route>
              <Route
                exact
                path="/Contact"
                element={<Contactme />}
              ></Route>
            </Routes>
          </div>
      </div>
      </Router>
      <Socials/> 
    </div>
    </>
  );
}

export default App;
