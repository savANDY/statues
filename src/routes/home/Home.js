import React from 'react';
import UsernameInput from '../../components/username-input';

function Home() {
  return (
    <main className="relative text-gray-200 bg-gray-900 h-full flex flex-col">
      <div className="max-w-md mt-5 mb-5 mx-auto rounded-xl shadow-md overflow-hidden md:max-w-5xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <UsernameInput />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
