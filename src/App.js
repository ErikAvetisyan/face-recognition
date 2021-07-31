import './App.css';
import Navigation from './components/navigation/navigation';
import 'tachyons';
import Logo from './components/logo/logo';
import ImageLink from './components/imageLink/imageLink'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageLink />
      {/*<Logo />
      <ImageLink />
      <FaceRecognition  />*/}

    </div>
  );
}

export default App;
