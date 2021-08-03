import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/navigation';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import 'tachyons';
import Logo from './components/logo/logo';
import ImageLink from './components/imageLink/imageLink';
import Rank from './components/Rank/rank.js'
import { gold, green } from 'color-name';
import { Component } from 'react';


const app=new Clarifai.App({
  apiKey: 'a52f59e03beb41dcba2d2b850e489b5b'
});

const particleOptions={
  particles: {
    number: {
      value:200,
      density: {
        enable:true,
        value_area: 800
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
    },
    line_linked: {
      enable_auto: true,
      distance: 200,
      opacity: 1
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    console.log('click');
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input ).then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {

      }
    )

  }

  render() {
    return (
      <div className="App">
          <Particles className='particles'
              params={{particleOptions}} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLink 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
