import {  Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from './components/Layout';
import Sidebar from "./components/Sidebar/index";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
      </Routes>
    </>
  );
}

export default App;
