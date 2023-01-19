import { Routes, Route } from 'react-router-dom';
import Greetings from './components/Greetings.js';

const App = () => (
  <div id='App'>
    <Routes>
      <Route path="/" element={<Greetings />} />
    </Routes>
  </div>
);

export default App;