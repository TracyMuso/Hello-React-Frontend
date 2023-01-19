import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greetings from './components/Greetings';

const App = () => (
  <div id='App'>
    <Routes>
      <Route path="/" element={<Greetings />} />
    </Routes>
  </div>
);
//server pid 15976

export default App;