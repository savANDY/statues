import { db, ref, set, get } from '../init-firebase';
import UserService from './user.service';

const GameService = {
  getGame: (username) =>
    new Promise((resolve, reject) => {
      get(ref(db, `games/${username}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            resolve(snapshot.val());
          } else {
            reject(new Error('Game inexistent'));
          }
        })
        .catch((error) => {
          reject(error);
        });
    }),
  create: async (username, data) => {
    await UserService.signInAnonymouslyAndUpdateName(username);
    const snapshot = await get(ref(db, `games/${username}`));
    if (snapshot.exists()) {
      return;
    }
    await set(ref(db, `games/${username}`), data);
  },
  resetScore: (username) => {
    set(ref(db, `games/${username}/score`), 0);
  },
  updateHighScore(username, highScore) {
    set(ref(db, `games/${username}/highScore`), highScore);
  },
  updateScore(username, score) {
    set(ref(db, `games/${username}/score`), score);
  }
};

export default GameService;
