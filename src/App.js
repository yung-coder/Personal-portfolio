import './App.css';
import Introduction from './components/Introduction';
import Videobackground from './components/Videobackground';
function App() {
  return (
    <>
    <div className="App">
      <Videobackground/>
      <div className='content'>
         <Introduction/>
      </div>
    </div>
    </>
  );
}

export default App;
