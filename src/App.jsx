import './App.css';
import Puja from './pages/Puja';
import { Routes, Route } from 'react-router-dom';
import CardsDetailpge from './pages/CardsDetailpge'; 
import NityaAti from './components/NityaAti';
import Kashi from './components/Kashi';
import Numer from './pages/Numer';
import Sati from './pages/Sati';
import Gems from './pages/Gems';
import Navbar from './components/Navbar';
import UpcomingDetailpge from './pages/UpcomingDetailpge';
import SimplePujaPge from './pages/SimplePujaPge'; 
import PathRecitation from './pages/PathRecitation';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Puja />} />
        <Route path="/Puja" element={<Puja />} />
        <Route path="/pujas/:id" element={<CardsDetailpge />} /> 
        <Route path="/upcoming-puja/:id" element={<UpcomingDetailpge />} />
        <Route path="/nitya-ati-rudrabhishek" element={<NityaAti />} />
        <Route path="/puja-in-kashi" element={<Kashi />} />
        <Route path="/simple-puja" element={<SimplePujaPge />} />
        <Route path="/path-recitation" element={<PathRecitation />} />

        <Route path="/Numer" element={<Numer />} />
        <Route path="/Sati" element={<Sati />} />
        <Route path="/Gems" element={<Gems />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;