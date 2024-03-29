import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './About';
import Committee from './Committee';
import Homepage from "./Homepage";
import ImpDates from './ImpDates';
import Registration from './Registration';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/registration" element={<Registration/>}/>
      <Route exact path="/important-dates" element={<ImpDates/>}/>
      <Route exact path="/programme-committee" element={<Committee/>}/>
    </Routes>
  );
}

export default App;
