import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Portfolio/HomePage';
import Navbar from './Portfolio/Navbar';
import Spinner from './Portfolio/Spinner';

function App() {
  const [loading, setLoading] = useState(true);
  window.addEventListener("load", (event) => {
    setTimeout(() => { setLoading(false) }, 2500)
  })
  return (
    <div>
      {
        loading ?
          <Spinner
            background={"transparent"}
            desktopSize={"150px"}

          />
          :
          <div className="App" >
            <Navbar>
              <Routes>
                <Route path='/' element={<HomePage></HomePage>}></Route>
              </Routes>
            </Navbar>
          </div >
      }
    </div>
  );
}

export default App;
