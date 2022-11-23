//import Test from './components/Test';
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from "./containers"
import {Brand, Cta, Navbar} from "./components";
import {useState} from 'react';
import video from "./assets/badapple.mp4";


function App() {

  const [atari, setAtari] = useState(false)
  const [badApple, setBadApple] = useState(false)


  const videoElement = (
    <>
    <video  autoPlay id="badApple">
      <source src={video} type="video/mp4" />
      lame, I couldn't play this cool video cause of your dumb browser :(
    </video>
    </>
  )
 

  return (
    <div className="App">
        <div className="gradient__bg">

          <Navbar transform={setBadApple}/>
          {badApple ? videoElement : <Header transform={badApple}/>}
        </div>

          <Brand />
          <WhatGPT3 />
          <Features />
          <Possibility game={atari}/>
          <Cta title={atari} setGame={setAtari}/>
          <Blog titleChange={atari}/>
          <Footer transform={setBadApple}/>
      
    </div>
  );
}

export default App;
