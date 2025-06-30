import { useState } from 'react';
import './App.css';
import Counter from './counter';

function App() {
  const[darkMode,setDarkMode]=useState(false);
  return (
   <div className={darkMode?" container dark":"container"}>
    <h1>Click Counter App</h1>
    <Counter/><br/>
    <button className='btn' onClick={()=>setDarkMode(!darkMode)}>
      {darkMode?"Switch to light Mode":"Switch to Dark Mode"}
    </button>
   </div>
  );
}

export default App;

