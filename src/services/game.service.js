import { getDatabase } from 'firebase/database';
import { child, db, ref, set, get } from '../init-firebase';
import UserService from './user.service';

const GameService = {
  create: async (username, data) => {
    await UserService.signInAnonymouslyAndUpdateName(username);
    const gameRef = ref(getDatabase());
    const snapshot = await get(child(gameRef, `games/${username}`));
    if (snapshot.exists()) {
      return;
    }
    await set(ref(db, `games/${username}`), data);
  }
};

export default GameService;
