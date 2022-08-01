import './App.css';
import background from './back.mp4';
function App() {
  return (
    <>
    <div className="App">
       <div className='overlay'></div>
       <div className='main'>
       <video autoPlay loop muted className='video'>
        <source
          src={background}
          type="video/mp4"
        />
      </video>
      </div>
      <div className='content'>
        
      </div>
    </div>
    </>
  );
}

export default App;
