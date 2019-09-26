import React from 'react';
import './App.css';
import Info from './Components/Info';
import Buttons from './Components/Buttons';

function App() {
  return (
    <div className="App">  
      <body>
        {/* HEADER */}
        <header>
          <div className='logo'>Home</div>
        </header>

        {/* BODY */}
        <div>
          <div className='white-box'>

          <div className='name'><Info /></div>  
            
          </div>
        </div>

        {/* BUTTONS */}
        <div className='buttons'><Buttons /></div> 
            
      
      </body>
    </div>
  );
}

export default App;
