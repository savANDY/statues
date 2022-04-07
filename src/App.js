import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Game from './routes/game/Game';

function App() {
  return (
    <div className="relative text-gray-200 bg-gray-900 h-screen flex flex-col">
      <div className="max-w-md mt-5 mb-5 mx-auto rounded-xl shadow-md overflow-hidden md:max-w-5xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <BrowserRouter>
              <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="game" element={<Game />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
