import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/navigation';
import 'tachyons';
import Logo from './components/logo/logo';
import ImageLink from './components/imageLink/imageLink';
import Rank from './components/Rank/rank.js'
import { gold, green } from 'color-name';


const particleOptions={
  particles: {
    number: {
      value:200,
      density: {
        enable:true,
        value_area: 1000
      }
    },
    color: {
      value: green
    },
    shape: {
      stroke: {
        width:3,
        color: gold
      }
    }

  }
}

function App() {
  return (
    <div className="App">
        <Particles className='particles'
            params={{particleOptions}} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLink />
      {/*<Logo />
      <ImageLink />
      <FaceRecognition  />*/}

    </div>
  );
}

export default App;
