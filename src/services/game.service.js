import { getDatabase } from 'firebase/database';
import {
  child,
  db,
  ref,
  set,
  get,
  increment,
  onValue,
  off
} from '../init-firebase';
import UserService from './user.service';

const GameService = {
  listenToScore: (username, setScore) => {
    const scoreRef = ref(db, `games/${username}/score`);
    onValue(scoreRef, (snapshot) => {
      const data = snapshot.val();
      setScore(data);
    });
    return scoreRef;
  },
  listenToHighScore: (username, setHighScore) => {
    const highScoreRef = ref(db, `games/${username}/highScore`);
    onValue(highScoreRef, (snapshot) => {
      const data = snapshot.val();
      setHighScore(data);
    });
    return highScoreRef;
  },
  create: async (username, data) => {
    await UserService.signInAnonymouslyAndUpdateName(username);
    const gameRef = ref(getDatabase());
    const snapshot = await get(child(gameRef, `games/${username}`));
    if (snapshot.exists()) {
      return;
    }
    await set(ref(db, `games/${username}`), data);
  },
  incrementScore: (username, positive) => {
    set(ref(db, `games/${username}/score`), increment(positive ? 1 : -1));
  },
  resetScore: (username) => {
    set(ref(db, `games/${username}/score`), 0);
  },
  updateHighScore(username, highScore) {
    set(ref(db, `games/${username}/highScore`), highScore);
  },
  stopListeningTo(...args) {
    args.forEach((arg) => off(arg));
  }
};

export default GameService;
