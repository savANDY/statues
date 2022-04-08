import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Game from './routes/game/Game';

function App() {
  return (
    <div className="relative text-gray-200 bg-gray-900 h-full flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
