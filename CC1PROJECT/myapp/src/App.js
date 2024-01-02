import React from 'react';
import Navbar from './Components/Navbar.js';
// import Product from './Components/Product.js';
import Home from './Components/Home.js';
import Log from './Components/Log.js';
import Register from './Components/Register.js';
import  { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App(){
  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Log" element={<Log/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
      </Routes>
    </Router>
    </>
    )
}
export default App;