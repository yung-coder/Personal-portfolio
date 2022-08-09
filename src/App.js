import {  Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from './components/Layout';
import Home from './components/Home';
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <>
      <div className="App">
      <Sidebar />
      <Routes>
        {/* <Route path="/" element={<Layout/>}></Route> */}
        <Route index element={<Home />}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
