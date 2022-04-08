import { signInAnonymously, updateProfile } from 'firebase/auth';
import { auth } from '../init-firebase';

const UserService = {
  signInAnonymouslyAndUpdateName: async (username) => {
    await signInAnonymously(auth);
    await updateProfile(auth.currentUser, {
      displayName: username
    });
    return username;
  },
  signOut() {
    auth.signOut();
  },
  getAuth() {
    return auth;
  }
};

export default UserService;
