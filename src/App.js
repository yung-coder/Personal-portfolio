import {  Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from './components/Home';
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About";
import Contact from "./components/contact";
import Portfolio from './components/Portfolio';
function App() {
  return (
    <>
      <div className="App">
      <Sidebar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App;