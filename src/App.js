
import './App.css';
import HomePage from './HomePage';
import {  Route, Routes,BrowserRouter } from 'react-router-dom'

import { History } from './History';
function App() {
  return (
    <div className="App">

      <BrowserRouter>

    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/History"  element={<History></History>}></Route>
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
