import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import NotFound from './components/NotFound';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      {' '}
      <Routes>
        <Route path="/" element={<Rockets />} />
        {' '}
        <Route path="/rockets" element={<Rockets />} />
        {' '}
        <Route path="/missions" element={<Missions />} />
        {' '}
        <Route path="/myprofile" element={<MyProfile />} />
        {' '}
        <Route path="*" element={<NotFound />} />
        {' '}
      </Routes>
      {' '}
    </div>
  );
}

export default App;
