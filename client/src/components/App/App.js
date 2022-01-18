import './App.css';
import Welcome from '../Welcome';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import Table from '../Table/index';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/contacts" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
