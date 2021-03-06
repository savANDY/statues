import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameService from '../../services/game.service';
import { randomNumber } from '../../utils/utils';
import GameButtons from '../../components/game-buttons';
import TrafficLight from '../../components/traffic-light';
import TopNavbar from '../../components/top-navbar';
import UserService from '../../services/user.service';

function Game() {
  const navigate = useNavigate();
  const [user, loading] = UserService.getAuth();
  const [username, setUsername] = useState('');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [greenLight, setGreenLight] = useState(true);
  const [leftStepTurn, setLeftStepTurn] = useState(true);
  const [greenLightTimer, setGreenLightTimer] = useState(10000);

  useEffect(() => {
    if (!username) {
      return;
    }
    GameService.getGame(username).then((response) => {
      setHighScore(response.highScore || 0);
      setScore(response.score || 0);
    });
  }, [username]);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      navigate('/');
      return;
    }

    if (user.displayName) {
      setUsername(user.displayName);
    }
  }, [user, loading]);

  useEffect(() => {
    if (!username || loading || !score) {
      return;
    }
    setGreenLightTimer(
      Math.max(10000 - score * 100, 2000) + randomNumber(-1500, 1500)
    );
    GameService.updateScore(username, score);
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score]);

  useEffect(() => {
    if (!username || loading || !highScore) {
      return;
    }
    GameService.updateHighScore(username, highScore);
  }, [highScore]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGreenLight(false);
    }, greenLightTimer);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (greenLight) {
      const timer = setTimeout(() => {
        setGreenLight(false);
      }, greenLightTimer);
      return () => {
        clearTimeout(timer);
      };
    }
    const timer = setTimeout(() => {
      setGreenLight(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [greenLight]);

  const handleStepClick = (isLeftStep) => {
    if (greenLight && isLeftStep === leftStepTurn) {
      setScore(score + 1);
    } else if (greenLight) {
      setScore(score - 1);
    } else {
      setScore(0);
      setLeftStepTurn(true);
    }
    setLeftStepTurn(!isLeftStep);
  };

  const loadingText = 'loading...';
  return (
    <div className="h-full">
      <TopNavbar />
      <main className="w-3/4 container mx-auto h-full">
        <div className="text-center">
          <h1 className="font-bold mt-5">
            High Score: {loading ? loadingText : highScore}
          </h1>
        </div>
        <TrafficLight greenLight={greenLight} />
        <div className="text-center">
          <h2 className="font-bold mb-7">
            Score: {loading ? loadingText : score}
          </h2>
        </div>
        <GameButtons onClick={handleStepClick} />
      </main>
    </div>
  );
}

export default Game;
