import React, { useEffect, useState } from 'react';
import UserService from '../../services/user.service';

export default function TopNavbar() {
  const [user, loading] = UserService.getAuth();
  const [username, setUsername] = useState('loading...');
  useEffect(() => {
    if (loading || !user) {
      return;
    }
    if (user.displayName) {
      setUsername(user.displayName);
    }
  }, [user, loading]);
  return (
    <nav className="flex sm:justify-center space-x-4 text-gray-300 pb-2 bg-gray-800 px-2 sm:px-4 py-2.5 rounded">
      <div
        className="container flex text-slate-600 uppercase font-bold self-center"
        data-testid="username"
      >
        {username}
      </div>
      <button
        onClick={() => UserService.signOut()}
        type="button"
        tabIndex="0"
        className="rounded-lg px-3 py-2 text-slate-400 font-medium bg-slate-700 hover:bg-slate-100 hover:text-slate-900"
      >
        Logout
      </button>
    </nav>
  );
}
