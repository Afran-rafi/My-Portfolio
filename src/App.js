import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Portfolio/HomePage';
import Navbar from './Portfolio/Navbar';

function App() {

  return (
    <div className="App" >
      <Navbar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
        </Routes>
      </Navbar>
    </div >
  );
}

export default App;
