import ReactPlayer from 'react-player'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Userinterest from './pages/Userinterest';
import Rain from './components/Rain';
import Nav from './components/Nav';

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
                     <Userinterest/>
                  </Route>
                  <Route path="/userinterest">
                      <Userinterest/>
                  </Route>
              </Switch>
            </div>
            <div className="react-player-holder">
              <ReactPlayer width="100%" height="100%" url="https://www.youtube-nocookie.com/embed/KzHzGCSPED4"/>
            </div>
        </div>
    </Router>
  );
}

export default App;