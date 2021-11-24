import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './style.css';

import NormalGame from "./NormalGame/NormalGame";
import FreeGameApp from "./FreeGame/FreeGameApp.js";
import GameRule from "./GameRule/GameRule";
import Shop from "./shop";

import ButtonContainer from './buttons/ButtonsContainer'
import {WelcomePic} from './WelcomPic'

function App() {
  return (
    <Router>
      <Link to="/"><a className={"button3"}>Back to Home</a></Link>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/normalgame" element={<NormalGame />} />
        <Route path="/freegame" element={<FreeGameApp />} />
          <Route path="/gamerule" element={<GameRule />} />
        
      </Routes>
    </Router>
  );
}


const Home = () => (
  <body className={'greyBackGround'}>
    <WelcomePic />
    <ButtonContainer />
  </body>
)

export default App;
