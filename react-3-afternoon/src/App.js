import React from 'react';
import './App.css';
import Name from './Components/Name';
import FromJobEmployer from './Components/FromJobEmployer';
import FavoriteMovies from './Components/FavoriteMovies';

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
            <div className='name'>
              <Name />
            </div> 
            <div className='from-job-employer'>
              <FromJobEmployer />
            </div>
            <div className='favorite-movies'>
              <FavoriteMovies />
            </div> 
          </div>
        </div>

      </body>
    </div>
  );
}

export default App;
