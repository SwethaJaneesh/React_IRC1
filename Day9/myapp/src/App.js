
import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Users from './Pages/Users';
import Adduser from './Pages/Adduser';
import Edituser from './Pages/Edituser';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Users />} />
        {/* <Route path='/ad' element={<users />} /> */}
        <Route path='/add' element={<Adduser/>} />
        <Route path='/edit' element={<Edituser />} />
      </Routes>
    </>
  );
}

export default App;
