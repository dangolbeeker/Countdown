import React, { useRef } from 'react';
import { fettiHook } from './hooks/fettiHook';
import { Text } from 'react-native';
import { useCountdown } from '@kfiros/react-countdown-hook';
import Confetti from 'react-native-magic-confetti';
import FastImage from 'react-native-fast-image';
import globe.png from './assets';
import mic.png from './assets';
import record.png from './assets';
import headphones.png from './assets';

const App = () => {
  return (
  <fettiHook />
  );
}

export default App;