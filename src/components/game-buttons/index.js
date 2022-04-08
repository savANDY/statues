import React from 'react';
import GameButton from '../game-button';

export default function GameButtons({ onClick }) {
  return (
    <div className="flex flex-row justify-center gap-0.5 w-full">
      <GameButton onClick={() => onClick(true)} isLeft />
      <GameButton onClick={() => onClick(false)} />
    </div>
  );
}
