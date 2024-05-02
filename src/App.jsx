import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavBar from './Components/MyNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyFooter from './Components/MyFooter';
import ListaSaghe from './Components/ListaSaghe';
import TvShows from './Components/TvShows';
import './style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavBar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/tv-shows" element={<TvShows />} />
        </Routes>
        <MyFooter/>
      </div>
    </Router>
  );
}

// Componente Home che mostra i tre componenti ListaSaghe
function Home() {
  return (
    <div>
      <ListaSaghe Lista="batman" />
      <ListaSaghe Lista="Star Wars" />
      <ListaSaghe Lista="Lord of the Rings" />
    </div>
  );
}

export default App;
