// import ReactPlayer from 'react-player'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './components/Nav';
import Rain from './components/Rain';
import Footer from './assets/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Speakers from './pages/Speakers';



function App() {
  return (
    <Router>
       <Rain/>
        <div className="App">
            <Nav/>
            <div className="entire-body">
              <Switch>
                  <Route exact path="/">
                     <Home/>
                  </Route>
                  <Route path="/About">
                      <About/>
                  </Route>
                  <Route path="/Contact">
                      <Contact/>
                  </Route>
                  <Route path="/Speakers">
                      <Speakers/>
                  </Route>
              </Switch>
            </div>
            {/* <div className="react-player-holder">
              <ReactPlayer width="100%" height="100%" url="https://www.youtube-nocookie.com/embed/KzHzGCSPED4"/>
            </div> */}
            <Footer/>
        </div>
    </Router>
  );
}

export default App;