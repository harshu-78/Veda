import './App.css';
import Puja from './pages/Puja';
import { Routes, Route } from 'react-router-dom';
import CardsDetailpge from './pages/CardsDetailpge'; 
import NityaAti  from './components/NityaAti';
import Kashi from './components/Kashi';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Puja />} />
          <Route path="/Puja" element={<Puja />} />
          <Route path="/pujas/:id" element={<CardsDetailpge />} /> 
          <Route path="/nitya-ati-rudrabhishek" element={<NityaAti />} />
          <Route path="/puja-in-kashi" element={<Kashi />} /> 

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;