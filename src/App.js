import './App.css';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Videobackground from './components/Videobackground';
function App() {
  return (
    <>
    <div className="App">
      <Videobackground/>
      <div className='Navbar'>
        <Navbar/>
      </div>
      <div className='content'>
        <Introduction/>
      </div>
    </div>
    </>
  );
}

export default App;
