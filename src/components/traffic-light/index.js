import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TrafficLight({ greenLight }) {
  return (
    <div className="flex flex-row mb-5 w-full">
      <div className="basis-full text-center text-[250px]">
        <div
          className={greenLight ? 'text-green-700' : 'text-red-700'}
          data-testid="traffic-light-icon"
        >
          <FontAwesomeIcon icon="fa fa-traffic-light" />
        </div>
      </div>
    </div>
  );
}
