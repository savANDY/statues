import React from 'react';
import GameButton from '../game-button';

export default function GameButtons({ handleClick }) {
  return (
    <div className="flex flex-row justify-center gap-0.5 w-full">
      <GameButton handleClick={() => handleClick(true)} isLeft />
      <GameButton handleClick={() => handleClick(false)} />
    </div>
  );
}
