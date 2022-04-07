import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import GameService from '../../services/game.service';
import { auth } from '../../init-firebase';

export default function UsernameInput() {
  const [usernameInput, setUsernameInput] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading || !user) {
      return;
    }

    if (user.displayName) {
      setUsernameInput(user.displayName);
    }
  }, [user, loading]);

  const handleNewElementInputChange = (e) => {
    setUsernameInput(e.target.value);
  };

  async function handleSubmitForm(event) {
    event.preventDefault();
    const data = {
      score: 0,
      highScore: 0,
      isLeftTurn: true
    };
    try {
      await GameService.create(usernameInput, data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
    setUsernameInput('');
    navigate('/game');
  }

  return (
    <div className="max-w-md mt-5 mb-5 mx-auto rounded-xl shadow-md overflow-hidden md:max-w-5xl">
      <div className="md:flex">
        <div className="p-8 w-full">
          <form onSubmit={handleSubmitForm}>
            <div className="w-full">
              <div className="mt-1">
                <label
                  htmlFor="elementoInput"
                  className="uppercase tracking-wide text-sm text-white font-semibold"
                >
                  User
                  <input
                    type="text"
                    id="elementoInput"
                    onChange={handleNewElementInputChange}
                    name="elemento"
                    value={usernameInput}
                    minLength="3"
                    pattern="[a-zA-Z0-9]+"
                    className="px-3 py-2 bg-gray-800 text-gray-300 border shadow-sm border-gray-700 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                    placeholder="Type your username"
                  />
                </label>
              </div>
            </div>
            <div className="mt-6 text-right">
              <button
                className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
                type="submit"
              >
                Play
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
