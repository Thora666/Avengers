import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Avengers from './components/fake/Avengers';
import Privacy from './components/Privacy';
import './App.css';
import JoinUs from './components/JoinUs';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <header>
        <div class="header-banner">
          <h1 class="site-title">Welcome To Avengers!</h1>
           <span class="site-tagline">THORA'S DESIGN</span>
        </div>
        <div class="clear"></div>
      </header>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Avengers />}></Route>
        <Route path="Privacy" element={<Privacy />}></Route>
        <Route path="JoinUs" element={<JoinUs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <footer class="footer">
        <div class="container">
          <p>Copyright © Pictures from Google</p>
        </div>
      </footer>

    </div>
  );
}


export const NotFound = () => {
  return <div>This is a 404 page</div>
}
export default App;
