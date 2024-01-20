import {useState} from 'react';
import './App.css';

function App() {

  const [count,setCount] =useState(1);
  return (
    <div className="App">
      <h1>demo on controlled & uncontrolled components</h1>
    <div className='demo'>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button>{count}</button>
      <button onClick={()=>setCount(count-1)}>-</button>

    </div>
    </div>
  );
}

export default App;
