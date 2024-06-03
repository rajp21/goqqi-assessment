import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import AddUser from './Pages/AddUser/AddUser';


function App() {
  return (
    <>
      <div className="loader"></div>
      <div className="App">
        <div class="main-wrapper main-wrapper-1">
          <div class="navbar-bg"></div>
            <Router> 
              <Navbar />
              <Sidebar />
              <Routes>  
                 <Route  path='/' element={<Home />} />
                 <Route  path='/add-user' element={<AddUser />} />
              </Routes>
            </Router>
        </div>
      </div>
    </>
  );
}

export default App;
