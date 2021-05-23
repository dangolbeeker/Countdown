import Confetti from 'react-native-magic-confetti';
import FastImage from 'react-native-fast-image';
import globe.png from './assets';
import mic.png from './assets';
import record.png from './assets';
import headphones.png from './assets';

const fetteHook {
<Confetti
  count={42} // custom number of confettis
  size={32}
  colors={['red', 'green', 'blue']} // require FastImage
  imageComponent={FastImage} // custom image component
  confettiImages={[
    require('./assets/mic.png'),
    require('./assets/record.png'),
    require('./assets/headphones.png'),
    require('./assets/globe.png'),
  ]} // all confetti images to be chosen randomly
  yspeed={3} // fall speed
/>

//  function Emojifetti(props) {
//   return <Confetti gravity={0.1} {...props} drawShape={draw(props.emojis)} />;
// }
}
export default fetteHook;

