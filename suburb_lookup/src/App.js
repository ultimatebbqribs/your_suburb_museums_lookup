import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage';
import MainPinboard from './MainPinboard';
import { Route, Routes, Link } from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainPinboard />} />

      <Route path="/main/:searchTerm" element={<MainPinboard />} />

      </Routes>
  );
}

export default App;
