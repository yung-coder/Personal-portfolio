import './App.css';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
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
      <div className=''>
        <Socials/>
      </div>
    </div>
    </>
  );
}

export default App;
