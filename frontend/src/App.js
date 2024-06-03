import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { useEffect } from 'react';


function App() {
  return (
    <>
      {/* <div className="loader"></div> */}
      <div className="App">
        <div class="main-wrapper main-wrapper-1">
          <div class="navbar-bg"></div>
            <Router> 
              <Navbar />
              <Sidebar />
              <Routes>
              
              </Routes>
            </Router>
        </div>
      </div>
    </>
  );
}

export default App;
