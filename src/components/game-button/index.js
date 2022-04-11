import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function GameButton({ onClick, isLeft }) {
  return (
    <button
      type="button"
      className={`basis-1/2 md:basis-1/3 bg-blue-500 text-white font-bold py-2 px-4 whitespace-nowrap ${
        isLeft ? 'rounded-l-lg' : 'rounded-r-lg'
      }`}
      onClick={onClick}
    >
      {!isLeft && 'RIGHT '}
      <FontAwesomeIcon
        transform={{ rotate: isLeft ? 270 : 90 }}
        flip={isLeft ? undefined : 'vertical'}
        icon="fa fa-shoe-prints"
        className="text-2xl text-blue-900"
      />
      {isLeft && ' LEFT'}
    </button>
  );
}
