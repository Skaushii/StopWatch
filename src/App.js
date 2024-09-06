import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const[timer,settimer]=useState(0);
  const[running,setrunning]=useState(false);

  useEffect(() => {
    let timeinterval;
    if(running){
      timeinterval=setInterval(()=> {
        settimer((prevTime)=>prevTime + 10);
    },10);
  }else if(!running){
    clearInterval(timeinterval);
  }
  return ()=> clearInterval(timeinterval);
  }, [running]);
  return (
    <>
    <h1>STOP WATCH</h1>
    <div className='cal'>
    <h1>
    <span>{String(Math.floor(timer / 3600)).padStart(2, '0')}:</span>
    <span>{String(Math.floor((timer % 3600) / 60)).padStart(2, '0')}:</span>
    <span>{String(timer % 60).padStart(2, '0')}</span>
    </h1>
    </div>
    <div className='buttons'>
      <button onClick={()=> setrunning(true)}>Start</button>
      <button onClick={()=> setrunning(false)}>Stop</button>
      <button onClick={()=> settimer(0)}>Reset</button>

    </div>
    </>
  );
}

export default App;
