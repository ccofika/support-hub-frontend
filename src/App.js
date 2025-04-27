import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Home from './pages/Home'; // ovo novo
import Files from './pages/Files';
import TimeConverter from './pages/TimeConverter';
import CryptoExtractor from './pages/CryptoExtractor';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto-extractor" element={<CryptoExtractor />} />
        <Route path="/time-converter" element={<TimeConverter />} />
        <Route path="/macros" element={<div>Macros Page</div>} />
        <Route path="/files" element={<Files />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
